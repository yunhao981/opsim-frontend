enum StatType {
  UNDEFINED             = "UNDEFINED",
  HP_PERCENTAGE         = "HP_PERCENTAGE",
  HP_FIXED              = "HP_FIXED",
  ATK_PERCENTAGE        = "ATK_PERCENTAGE",
  ATK_FIXED             = "ATK_FIXED",
  DEF_PERCENTAGE        = "DEF_PERCENTAGE",
  DEF_FIXED             = "DEF_FIXED",
  ELEMENTAL_MASTERY     = "ELEMENTAL_MASTERY",
  ENERGY_RECHARGE       = "ENERGY_RECHARGE",
  PHYSICAL_DAMAGE_BONUS = "PHYSICAL_DAMAGE_BONUS",
  ANEMO_DAMAGE_BONUS    = "ANEMO_DAMAGE_BONUS",
  GEO_DAMAGE_BONUS      = "GEO_DAMAGE_BONUS",
  ELECTRO_DAMAGE_BONUS  = "ELECTRO_DAMAGE_BONUS",
  DENDRO_DAMAGE_BONUS   = "DENDRO_DAMAGE_BONUS",
  HYDRO_DAMAGE_BONUS    = "HYDRO_DAMAGE_BONUS",
  PYRO_DAMAGE_BONUS     = "PYRO_DAMAGE_BONUS",
  CRYO_DAMAGE_BONUS     = "CRYO_DAMAGE_BONUS",
  CRIT_RATE             = "CRIT_RATE",
  CRIT_DAMAGE           = "CRIT_DAMAGE",
  HEALING_BONUS         = "HEALING_BONUS",
}

class Stat {
  type:  StatType;
  value: number;
  constructor() {
    this.type = StatType.UNDEFINED;
    this.value = 0;
  }
}

export {
    StatType,
    Stat
}
