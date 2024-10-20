export const cardList = [
  {
    name: ["minecraft:pig", "minecraft:pig_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "10",
    atk: "0",
    Sact: "2",
    Bact: "14",
    text: [
      "§b召喚時効果 / 生の豚肉を1つ入手"
    ]
  },
  {
    name: ["minecraft:villager_v2", "minecraft:villager_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "20",
    atk: "0",
    Sact: "3",
    Bact: "8",
    text: [
      "§b召喚時効果 / 草ブロックを2つ入手",
      "§bターン経過時効果 / 草ブロックを1つ入手"
    ]
  },
  {
    name: ["minecraft:chest"],
    type: "item",
    attribute: "アイテム",
    Cact: "3",
    text: [
      "§b使用時 / 「木の剣、木のツルハシ、ニンジン付きの棒」を獲得する。"
    ]
  },
  {
    name:["minecraft:carved_pumpkin"],
    type: "item",
    attribute: "アイテム",
    Cact: "2",
    text: [
      "§b使用時 / 「スノーゴーレム」、「アイアンゴーレム」を入手する。"
    ]
  },
  {
    name:["minecraft:wolf", "minecraft:wolf_spawn_egg"],
    type: "entity",
    attribute: "速攻",
    hp: "32",
    atk: "30",
    Sact: "40",
    Bact: "4",
    text: [
      "§b生の豚肉を使用すると追加で1回攻撃できる。"
    ]
  },
  {
    name:["minecraft:bell"],
    type: "item",
    attribute: "アイテム",
    Cact: "25",
    text: [
      "§bお互いの場のアンデッド系モブに即死ダメージを与える。(除外効果ではない)",
      "§bそれ以外のモブは全回復し、すべてのモブから除外無効効果をなくす。"
    ]
  },
  {
    name:["minecraft:allay", "minecraft:allay_spawn_egg"],
    type: "entity",
    attribute: "浮遊・速攻",
    hp: "20",
    atk: "50",
    Sact: "40",
    Bact: "20",
    text: [
      "§bアレイがいる状態でドローするたびに4act獲得する。",
      "§bこの効果はアレイが複数いても重ならない。"
    ]
  },
  {
    name:["minecraft:panda", "minecraft:panda_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "300",
    atk: "70",
    Sact: "80",
    Bact: "8",
    text: [
      "§b除外無効"
    ]
  },
  {
    name:["minecraft:zombie", "minecraft:zombie_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "20",
    atk: "15",
    Sact: "3",
    Bact: "3",
    text: [
      "§b召喚時効果 / 草ブロックを2つ獲得",
      "§bHPが満タンの時、受けるダメージが1だけ小さくなる。",
      "§bたまに装備を付けた硬いゾンビが出る。"
    ]
  },
  {
    name:["minecraft:skeleton", "minecraft:skeleton_spawn_egg"],
    type: "entity",
    attribute: "速攻・貫通",
    hp: "20",
    atk: "-",
    Sact: "4",
    Bact: "3",
    text: [
      "§b召喚時効果 / 「矢」を1つ獲得する。",
      "§bターン経過時効果 / 「矢」を1つ獲得する。",
      "§bたまに装備を付けたスケルトンが出る。"
    ]
  },
  {
    name:["minecraft:creeper", "minecraft:creeper_spawn_egg"],
    type: "entity",
    attribute: "ガード",
    hp: "20",
    atk: "-",
    Sact: "4",
    Bact: "3",
    text: [
      "§bターン経過時効果 / 相手のモブ全員(浮遊、ガードを除く)に5ダメージを与える。"
    ]
  },
  {
    name:["minecraft:witch", "minecraft:witch_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "26",
    atk: "15",
    Sact: "7",
    Bact: "11",
    text: [
      "§bターン経過時効果 / 自分を全回復する。",
      "§b時間経過で回復するので同じターン内でも一気に倒したほうが良い。"
    ]
  },
  {
    name:["minecraft:mob_spawner"],
    type: "item",
    attribute: "アイテム",
    Cact: "8",
    text: [
      "§b使用時 / 「ハスク」、「ストレイ」、「洞窟グモ」を獲得する。"
    ]
  },
  {
    name:["minecraft:phantom", "minecraft:phantom_spawn_egg"],
    type: "entity",
    attribute: "浮遊・速攻",
    hp: "20",
    atk: "15x2",
    Sact: "15",
    Bact: "6",
    text: []
  },
  {
    name:["minecraft:breeze", "minecraft:breeze_spawn_egg"],
    type: "entity",
    attribute: "浮遊",
    hp: "30",
    atk: "15",
    Sact: "45",
    Bact: "8",
    text: [
      "§b召喚時効果 / お互いの場のブリーズ以外のモブをすべて除外する。",
      "§b残ったモブからは除外無効効果をなくす。"
    ]
  },
  {
    name:["minecraft:ender_chest"],
    type: "item",
    attribute: "アイテム",
    Cact: "30",
    text: [
      "§b使用時 / 相手モブ全員に10ダメージを与え、次のカードからランダムで獲得する。",
      "§b「エンチャントされた金のリンゴ」",
      "§b「ストレイ」x2",
      "§b「ハスク」x2",
      "§b「ファントム」x2"
    ]
  },
  {
    name:["minecraft:wither_rose"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§bこのカードは以下の条件下でしか使用できない。",
      "§b・相手のスロットがすべて埋まっている。",
      "§b・自分の場にモブがいない。",
      "§b・相手のactが40以上",
      "§b・自分のactが10以下",
      "§b使用時 / お互いのactを40にする。その代わりカードの使用者は8ダメージを受ける。",
      "§b草ブロックを3つ入手する。 相手の場のすべてのモブに20ダメージを与える。",
      "§bこのダメージは相手の属性の影響を受けない。"
    ]
  },
  {
    name:["minecraft:zombie_pigman", "minecraft:zombie_pigman_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "20",
    atk: "20x2",
    Sact: "10",
    Bact: "15",
    text: [
      "§b召喚時効果 / 草ブロックを2つ獲得。",
      "§bHPが満タンの時、受けるダメージが1減少する",
    ]
  },
  {
    name:["minecraft:wither_skeleton", "minecraft:wither_skeleton_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "60",
    atk: "15x3",
    Sact: "20",
    Bact: "10",
    text: []
  },
  {
    name:["minecraft:crying_obsidian"],
    type: "item",
    attribute: "アイテム",
    Cact: "15",
    text: [
      "§b使用時 / 味方1体に除外無効効果を付与する。"
    ]
  },
  {
    name:["minecraft:strider", "minecraft:strider_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "32",
    atk: "0",
    Sact: "25",
    Bact: "25",
    text: [
      "§b召喚時効果 / 「鞍」を1つ入手する。"
    ]
  },
  {
    name:["minecraft:lava_bucket"],
    type: "item",
    attribute: "アイテム",
    Cact: "25",
    text: [
      "§b使用時 / 相手プレイヤーに4ダメージを与えて",
      "§bその後「泣く黒曜石」と「ジャガイモ」を入手する。"
    ]
  },
  {
    name:["minecraft:blaze", "minecraft:blaze_spawn_egg"],
    type: "entity",
    attribute: "浮遊",
    hp: "20",
    atk: "30",
    Sact: "40",
    Bact: "20",
    text: [
      "§bお互いのターン終了時 / 相手プレイヤーに2ダメージを与える。",
      "§b何体いてもダメージは重ならない。"
    ]
  },
  {
    name:["minecraft:netherite_ingot"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text: [
      "§b木の剣と合成できる。",
      "§b合成するのに20act必要。"
    ]
  },
  {
    name:["minecraft:porkchop"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text: [
      "§bそのままオオカミに使用できる。",
      "§b+石炭 = 焼き豚",
      "§b+ゾンビ = ゾンビピッグマン"
    ]
  },
  {
    name:["minecraft:cooked_porkchop"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b自分のHPを6回復する。"
    ]
  },
  {
    name:["minecraft:snow_golem", "minecraft:snow_golem_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "36",
    atk: "15",
    Sact: "4",
    Bact: "2",
    text: [
      "§b除外無効"
    ]
  },
  {
    name:["minecraft:iron_golem", "minecraft:iron_golem_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "250",
    atk: "30x2",
    Sact: "80",
    Bact: "5",
    text: [
      "§b召喚時効果 / 自分の場に村人がいると40act獲得する。"
    ]
  },
  {
    name:["minecraft:husk", "minecraft:husk_spawn_egg"],
    type: "entity",
    attribute: "ガード",
    hp: "20",
    atk: "30",
    Sact: "10",
    Bact: "10",
    text: [
      "§bこのモブは剣以外から攻撃を受けない。",
      "§bHPが満タンの時、最初に受けるダメージが1減少する。"
    ]
  },
  {
    name:["minecraft:stray", "minecraft:stray_spawn_egg"],
    type: "entity",
    attribute: "速攻・貫通",
    hp: "40",
    atk: "-",
    Sact: "20",
    Bact: "10",
    text: [
      "§b召喚時効果 / 「矢」を2つ獲得する。",
      "§bターン経過時効果 / 「矢」を2つ獲得する。"
    ]
  },
  {
    name:["minecraft:cave_spider", "minecraft:cave_spider_spawn_egg"],
    type: "entity",
    attribute: "なし",
    hp: "13",
    atk: "30",
    Sact: "15",
    Bact: "0",
    text: [
      "§b召喚時効果 / 「クモの巣」を1つ獲得。"
    ]
  },
  {
    name:["minecraft:enchanted_golden_apple"],
    type: "item",
    attribute: "アイテム",
    Cact: "25",
    text: [
      "§b使用時 / 自分のHP上限を40にし、",
      "§b自分のHPを全回復する。"
    ]
  },
  {
    name:["minecraft:saddle"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b自分の場にストライダーがいるときだけ使える。",
      "§b使用時 / 相手のモンスター1体と",
      "§b自分の場のすべてのストライダーを除外する。"
    ]
  },
  {
    name:["minecraft:web"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b使用時 / 相手のactを15下げる。"
    ]
  },
  {
    name:["minecraft:wooden_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 5",
      "§bプレイヤーに与えるダメージは80%減少する。"
    ]
  },
  {
    name:["minecraft:stone_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 15",
      "§bプレイヤーに与えるダメージは80%減少する。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:golden_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 20",
      "§bプレイヤーに与えるダメージは80%減少する。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:iron_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 30",
      "§bプレイヤーに与えるダメージは80%減少する。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:diamond_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 50",
      "§bプレイヤーに与えるダメージは80%減少する。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:netherite_sword"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b攻撃力: 70",
      "§bプレイヤーに与えるダメージは80%減少する。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:wooden_pickaxe"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b使用時 / 丸石と石炭を入手する。"
    ]
  },
  {
    name:["minecraft:stone_pickaxe"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b使用時 / 鉄インゴットを入手する。"
    ]
  },
  {
    name:["minecraft:iron_pickaxe"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§bダイヤモンドを入手する。"
    ]
  },
  {
    name:["minecraft:cobblestone"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text:[
      "§b+木の剣 = 石の剣",
      "§b+木のツルハシ = 石のツルハシ"
    ]
  },
  {
    name:["minecraft:iron_ingot"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text: [
      "§b+木の剣 = 鉄の剣",
      "§b+木のツルハシ = 鉄のツルハシ"
    ]
  },
  {
    name:["minecraft:diamond"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text: [
      "§b+木の剣 = ダイヤモンドの剣",
    ]
  },
  {
    name:["minecraft:coal"],
    type: "item",
    attribute: "合成素材",
    Cact: "-",
    text: [
      "§b+生の豚肉 = 焼き豚",
      "§b+スケルトン = ウィザースケルトン"
    ]
  },
  {
    name:["minecraft:arrow"],
    type: "item",
    attribute: "アイテム",
    Cact: "2",
    text: [
      "§b使用時 / 相手1体に30ダメージ",
      "§b浮遊している敵にも当たる。",
      "§bまた、相手スロットにモブがいてもプレイヤーを攻撃できる。",
      "§bプレイヤーに与えるダメージは1になる。",
      "§bターン経過時に消滅する。"
    ]
  },
  {
    name:["minecraft:carrot_on_a_stick"],
    type: "item",
    attribute: "アイテム",
    Cact: "0",
    text: [
      "§b使用時 / 自分のモブを1体除外してスロットを空けることができる。",
      "§bこの効果は除外無効のモブにも有効である。"
    ]
  }
]
//コンパス、望遠鏡、草ブロック、ウィザースケルトンの頭蓋骨、