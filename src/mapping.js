const mapping = {
  warmBlooded: {
    "a": [`alpaca`, `vicugna pacos`],
    "A": [`cat`, `felis catus`],
    "C": [`cow`, `bos taurus`],
    "d": [`dog`, `canis lupus`, `canis lupus familiaris`],
    "D": [`dolphin`],
    "e": [`elephant`, `loxodonta africana`, `loxodonta cyclotis`, `elephas maximus`],
    "n": [`finch`, `pyrrhula pyrrhula`],
    "g": [`guinea pig`, `cavia porcellus`],
    "G": [`gorilla`, `gorilla gorilla`],
    "h": [`horse`, `equus caballus`],
    "H": [`human`, `homo sapiens`],
    "i": [`chimpanzee`, `pan paniscus`, `pan troglodytes`],
    "I": [`squirrel`],
    "k": [`chicken`, `gallus gallus`],
    "l": [`armadillo`],
    "m": [`goat`],
    "M": [`mouse`, `mus musculus`],
    "N": [`mouse lemur`],
    "o": [`hedgehog`, `erinaceus europaeus`],
    "p": [`pig`, `sus scrofa`],
    "Q": [`shrew`],
    "r": [`monkey`, `macaca mulatta`],
    "R": [`rat`, `rattus norvegicus`],
    "t": [`rabbit`, `oryctolagus cuniculus`],
    "U": [`platypus`, `ornithorhynchus anatinus`],
    "w": [`wallaby`],
    "x": [`sheep`, `ovis aries`],
    "3": [`kangaroo rat`],
    "8": [`papio anubis`],
    "9": [`monodelphis`, `monodelphis domestica`],
    "!": [`ferret`, `mustela putorius furo`],
    "(": [`bat`],
    "*": [`orangutan`, `pongo abelii`, `pongo pygmaeus`]
  },
  plants: {
    "B": [`arabidopsis`, `arabidopsis thaliana`, `arabidopsis lyrata`, `brassica`, `brassica oleracea`, `brassica rapa`],
    "c": [`corn`, `zea mays`],
    "O": [`grapes`, `vitis vinifera`],
    "P": [`plant`, `physcomitrella patens`, `sorghum bicolor`, `triticum aestivum`],
    "5": [`barley`, `hordeum vulgare`, `hordeum vulgare subsp. vulgare`],
    "6": [`rice`, `oryza sativa`, `oryza sativa japonica group`],
    "%": [`brachypodium`, `brachypodium distachyon`],
    ")": [`tomatoes`, `solanum lycopersicum`, `solanum tuberosum`],
    "^": [`glycinemax`, `glycine max`]
  },
  other: {
    "b": [`bug`],
    "E": [`pufferfish`, `tetraodon nigroviridis`],
    "f": [`frog`, `xenopus (silurana) tropicalis`, `xenopus tropicalis`],
    "F": [`fly`, `drosophila melanogaster`],
    "L": [`ecoli`, `escherichia coli`],
    "s": [`scorpion`],
    "S": [`spider`],
    "u": [`fungus`],
    "v": [`virus`],
    "W": [`C elegans`, `caenorhabditis elegans`, `schistosoma mansoni`],
    "Y": [`yeast`, `saccharomyces cerevisiae`, `schizosaccharomyces pombe`],
    "Z": [`zebrafish`, `danio rerio`],
    "0": [`amoeba`],
    "1": [`mosquito`],
    "2": [`diatom`],
    "4": [`louse`],
    "7": [`anolis`, `anolis carolinensis`],
    "£": [`aspergillus`, `aspergillus fumigatus`],
    "+": [`ray`],
    "'": [`snail`],
    "$": [`bee`],
    "&": [`tick`],
    "@": [`plasmodium`]
  }
}

const lookupInGroup = (group, species) =>
  Object.keys(mapping[group]).find(iconChar => mapping[group][iconChar].includes(species.toLowerCase()))

const lookupIcon = (species) => {
  for (const group in mapping) {
    const iconChar = lookupInGroup(group, species)
    if (iconChar) {
      return [group, iconChar]
    }
  }

  return [``, ``]
}

const getAllSpecies = () => {
  const allSpecies = []
  Object.keys(mapping).forEach((group) => {
    Object.keys(mapping[group]).forEach((iconChar) => {
      mapping[group][iconChar].forEach(species => allSpecies.push(species))
    })
  })

  return allSpecies
}

export {lookupIcon as default, getAllSpecies}
