import * as mc from "@minecraft/server";
import {cardList} from "./cardinfo";

mc.system.runInterval(() => {
  let players = mc.world.getPlayers();
  players.forEach(player => {
    //見ているモブの情報表示
    const target = player.getEntitiesFromViewDirection({maxDistance:32, ignoreBlockCollision:true, 
      excludeTypes:["minecraft:item"]
    })[0]?.entity;
    if(target){
      const hp = target.getComponent(mc.EntityHealthComponent.componentId);
      player.onScreenDisplay.setActionBar([(target.typeId == "minecraft:player")?target.nameTag:{translate: `entity.${target.typeId.slice(10)}.name`}, ` ${Math.floor(hp.currentValue*10)/10}/${Math.floor(hp.defaultValue*10)/10}\n`, cardInfo(target.typeId).join("\n")]);
    }

    //アイテムに説明を表示
    const inv = player.getComponent(mc.EntityInventoryComponent.componentId).container;
    for(let i=0; i<inv.size; i++){
      /**
       * @type {mc.ItemStack | undefined}
       */
      const item = inv.getItem(i);
      if(!item) continue;
      if(item.getLore().length > 0) continue;
      if(!cardList.find((element) => element.name.includes(item.typeId))) continue;
      item.setLore(cardInfo(item.typeId));
      inv.setItem(i, item);
    }
  });
})

/**
 * カードテキスト取得関数
 * @param {String} name 
 * @returns {String[]} カードテキスト
 */
function cardInfo(name){
  const card = cardList.find((element) => element.name.includes(name));
  if(!card) return [];
  let text = [];
  if(card.type == "entity"){
    text.push(`§3属性:${card.attribute}`);
    text.push(`§aHP§r:${card.hp} §cATK§r:${card.atk} §eSact§r:${card.Sact} §6Bact§r:${card.Bact}`);
    card.text.forEach(t => text.push(t));
  }
  else if(card.type == "item"){
    text.push(`§3属性:${card.attribute}`);
    text.push(`§eCact§r:${card.Cact}`);
    card.text.forEach(t => text.push(t));
  }
  else return [];
  return text;
}

mc.world.afterEvents.entityHurt.subscribe(data=>{
  mc.world.sendMessage([(data.hurtEntity.typeId == "minecraft:player")?data.hurtEntity.nameTag:{translate: `entity.${data.hurtEntity.typeId.slice(10)}.name`}, `に${Math.floor(data.damage*10)/10}ダメージ!`]);
})

//デバッグを開始
//"/script debugger connect localhost 19144"