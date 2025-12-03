import { Data } from "../types/data";

export const DATA: Data = {
  A: {
    relation_to_head: {
      id: 1,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "daughter", frequency: 22, percentage: 10.6 },
          { x: "head", frequency: 107, percentage: 51.4 },
          { x: "housewife", frequency: 36, percentage: 17.3 },
          { x: "mother", frequency: 6, percentage: 2.9 },
          { x: "parent", frequency: 2, percentage: 1 },
          { x: "sister", frequency: 1, percentage: 0.5 },
          { x: "son", frequency: 4, percentage: 1.9 },
          { x: "spouse", frequency: 30, percentage: 14.4 },
        ],
      },
      title: "Frequency distribution of relation to head",
      finding:
        "Most respondents were household heads (51.4%), while the least represented relation was sister (0.5%).",
    },
    household_members: {
      id: 2,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "≤5", frequency: 148, percentage: 71.2 },
          { x: ">5", frequency: 60, percentage: 28.8 },
        ],
      },
      title: "Frequency distribution of household members",
      finding:
        "The majority of households had ≤5 members (71.2%), compared to only 28.8% with more than 5.",
    },
    injured_members: {
      id: 3,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "0", frequency: 177, percentage: 85 },
          { x: "1", frequency: 14, percentage: 6.7 },
          { x: "2", frequency: 10, percentage: 4.8 },
          { x: "3", frequency: 2, percentage: 1 },
          { x: "4", frequency: 4, percentage: 1.9 },
          { x: "6", frequency: 1, percentage: 0.5 },
        ],
      },
      title: "Frequency distribution of injured members",
      finding:
        "A striking 85% of households reported no injured members, while only 0.5% reported as many as six injured.",
    },
    deceased_members: {
      id: 4,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "0", frequency: 204, percentage: 98.1 },
          { x: "1", frequency: 4, percentage: 1.9 },
        ],
      },
      title: "Frequency distribution of deceased members",
      finding:
        "Nearly all households (98.1%) reported no deceased members, with just 1.9% reporting one deaths.",
    },
  },
  B: {
    main_source_of_income: {
      id: 5,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Agriculture/farming", frequency: 1, percentage: 0.5 },
          {
            x: "Daily labour/informal work",
            frequency: 34,
            percentage: 16.3,
          },
          { x: "Small bussiness/shop", frequency: 137, percentage: 65.9 },
          {
            x: "Private salaried employment",
            frequency: 16,
            percentage: 7.7,
          },
          { x: "Government employment", frequency: 8, percentage: 3.8 },
          { x: "Remittances/pensions", frequency: 5, percentage: 2.4 },
          { x: "Other", frequency: 7, percentage: 3.4 },
        ],
      },
      title: "Frequency distribution of main source of income",
      finding:
        "Small businesses/shops dominated as the main source of income (65.9%), while agriculture/farming was least common (0.5%).",
    },
    monthly_income: {
      id: 6,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "≤5 lakh", frequency: 166, percentage: 79.8 },
          { x: ">5 lakh", frequency: 42, percentage: 20.2 },
        ],
      },
      title: "Frequency distribution of monthly income",
      finding:
        "Most households (79.8%) earned ≤5 units monthly, compared to 20.2% earning above 5.",
    },
    external_walls_of_dwellings: {
      id: 7,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "bamboo/thatch/wood", frequency: 56, percentage: 26.9 },
          { x: "Sun-dried brick", frequency: 36, percentage: 17.3 },
          { x: "Burnt brick/masonry", frequency: 50, percentage: 24 },
          {
            x: "Reinforced concrete (RC)",
            frequency: 66,
            percentage: 31.8,
          },
        ],
      },
      title: "Frequency distribution of external walls of dwellings",
      finding:
        "Reinforced concrete walls were most common (31.8%), while sun-dried brick was least (17.3%).",
    },
    roof_material: {
      id: 8,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          {
            x: "Thatch/corrugated metal (thin)",
            frequency: 74,
            percentage: 35.6,
          },
          {
            x: "Corrugated metal (properly fixed)",
            frequency: 71,
            percentage: 34.1,
          },
          {
            x: "Concrete slab/tiled roof",
            frequency: 63,
            percentage: 30.3,
          },
        ],
      },
      title: "Frequency distribution of roof material",
      finding:
        "Thatch/corrugated thin metal roofs were slightly more common (35.6%) than concrete slab/tiled roofs (30.3%).",
    },
    storeys_of_dwellings: {
      id: 9,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "1", frequency: 27, percentage: 13 },
          { x: "2", frequency: 133, percentage: 63.9 },
          { x: "3", frequency: 17, percentage: 8.2 },
          { x: "4", frequency: 9, percentage: 4.3 },
          { x: "5", frequency: 2, percentage: 1 },
          { x: "6", frequency: 6, percentage: 2.9 },
          { x: "7", frequency: 13, percentage: 6.3 },
          { x: "10", frequency: 1, percentage: 0.5 },
        ],
      },
      title: "Frequency distribution of storeys of dwellings",
      finding:
        "Two-storey dwellings were dominant (63.9%), while 10-storey dwellings were rare (0.5%).",
    },
    years_built: {
      id: 10,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "≤10", frequency: 80, percentage: 38.5 },
          { x: ">10", frequency: 128, percentage: 61.5 },
        ],
      },
      title: "Frequency distribution of years built",
      finding:
        "Most dwellings were older than 10 years (61.5%), compared to 38.5% built within the last decade.",
    },
    ownership_of_dwellings: {
      id: 11,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Owned by household", frequency: 151, percentage: 72.6 },
          { x: "Rented", frequency: 54, percentage: 26 },
          {
            x: "Occupied without formal title",
            frequency: 3,
            percentage: 1.4,
          },
        ],
      },
      title: "Frequency distribution of ownership of dwellings",
      finding:
        "Household ownership was highest (72.6%), while occupation without formal title was rare (1.4%).",
    },
    access_to_phone: {
      id: 12,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 201, percentage: 96.6 },
          { x: "No", frequency: 7, percentage: 3.4 },
        ],
      },
      title: "Frequency distribution of access to phone",
      finding:
        "Almost universal access to phones (96.6%), with very few households lacking them (3.4%).",
    },
    access_to_radio: {
      id: 13,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 179, percentage: 86.1 },
          { x: "No", frequency: 29, percentage: 13.9 },
        ],
      },
      title: "Frequency distribution of access to radio",
      finding: "Most households had radios (86.1%), while 13.9% did not.",
    },
  },
  C: {
    gender: {
      id: 14,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Male", frequency: 74, percentage: 35.6 },
          { x: "Female", frequency: 134, percentage: 64.4 },
        ],
      },
      title: "Frequency distribution of gender",
      finding:
        "Females made up the majority of respondents (64.4%), while males accounted for 35.6%.",
    },
    age_of_respondents: {
      id: 15,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "≤40", frequency: 55, percentage: 26.4 },
          { x: "41-60", frequency: 113, percentage: 54.3 },
          { x: ">60", frequency: 40, percentage: 19.2 },
        ],
      },
      title: "Frequency distribution of age of respondents",
      finding:
        "Most respondents were aged 41–60 (54.3%), while the smallest group was over 60 (19.2%).",
    },
    relationship_to_head: {
      id: 16,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "head", frequency: 106, percentage: 51 },
          { x: "spouse", frequency: 65, percentage: 31.3 },
          { x: "child", frequency: 29, percentage: 13.9 },
          { x: "parent", frequency: 7, percentage: 3.4 },
          { x: "Other", frequency: 1, percentage: 0.5 },
        ],
      },
      title: "Frequency distribution of relationship to head",
      finding:
        "Over half of respondents were household heads (51%), while only 0.5% fell into 'other' relations.",
    },
    education_levels: {
      id: 17,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "primary", frequency: 28, percentage: 13.5 },
          { x: "secondary", frequency: 96, percentage: 46.2 },
          { x: "higher secondary", frequency: 76, percentage: 36.5 },
          { x: "university/tertiary", frequency: 8, percentage: 3.8 },
        ],
      },
      title: "Frequency distribution of education levels",
      finding:
        "Secondary education was most common (46.2%), while university/tertiary education was least (3.8%).",
    },
    occupation_at_the_time_of_earthquake: {
      id: 18,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Daily labour", frequency: 2, percentage: 1 },
          { x: "dependent", frequency: 62, percentage: 29.8 },
          { x: "Government employment", frequency: 1, percentage: 0.5 },
          { x: "own business", frequency: 30, percentage: 14.4 },
          { x: "small business", frequency: 113, percentage: 54.3 },
        ],
      },
      title: "Frequency distribution of occupation at the time of earthquake",
      finding:
        "Small business was the dominant occupation (54.3%), while government employment was rare (0.5%).",
    },
  },
  D: {
    place_during_earthquake: {
      id: 19,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          {
            x: "inside home (ground floor",
            frequency: 99,
            percentage: 47.6,
          },
          {
            x: "inside home (upper floor)",
            frequency: 57,
            percentage: 27.4,
          },
          {
            x: "in structural public building",
            frequency: 17,
            percentage: 8.2,
          },
          { x: "outside near home", frequency: 25, percentage: 12 },
          { x: "in vehicle", frequency: 6, percentage: 2.9 },
          { x: "other", frequency: 4, percentage: 1.9 },
        ],
      },
      title: "Frequency distribution of place during earthquake",
      finding:
        "Nearly half were inside their home on the ground floor (47.6%), while very few were in vehicles (2.9%) or other places (1.9%).",
    },
    person_asleep_during_earthquake: {
      id: 20,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 17, percentage: 8.2 },
          { x: "No", frequency: 191, percentage: 91.8 },
        ],
      },
      title: "Frequency distribution of person asleep during earthquake",
      finding:
        "The vast majority were awake (91.8%), with only 8.2% asleep during the earthquake.",
    },
    person_evacuated_during_earthquake: {
      id: 21,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 116, percentage: 55.8 },
          { x: "No", frequency: 92, percentage: 44.2 },
        ],
      },
      title: "Frequency distribution of person evacuated during earthquake",
      finding: "More than half evacuated (55.8%), while 44.2% did not.",
    },
    struck_by_debris_during_evacuation: {
      id: 22,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 33, percentage: 15.9 },
          { x: "No", frequency: 175, percentage: 84.1 },
        ],
      },
      title: "Frequency distribution of struck by debris during evacuation",
      finding:
        "Most evacuees were not struck by debris (84.1%), though 15.9% reported being hit.",
    },
  },
  E: {
    injury_persons: {
      id: 23,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 31, percentage: 14.9 },
          { x: "No", frequency: 177, percentage: 85.1 },
        ],
      },
      title: "Frequency distribution of injury persons",
      finding:
        "Most households reported no injuries (85.1%), while 14.9% had at least one injured person.",
    },
    type_of_injury: {
      id: 24,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "fracture", frequency: 1, percentage: 3.2 },
          { x: "head injury", frequency: 2, percentage: 6.5 },
          { x: "soft tissue injury", frequency: 27, percentage: 87.1 },
          { x: "crush injury", frequency: 1, percentage: 3.2 },
        ],
      },
      title: "Frequency distribution of type of injury",
      finding:
        "Soft tissue injuries dominated (13%), while fractures and crush injuries were rare (0.5% each).",
    },
    severity_of_injury: {
      id: 25,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          {
            x: "minor (no hospital visit)",
            frequency: 27,
            percentage: 87.1,
          },
          { x: "moderate (out patient)", frequency: 3, percentage: 9.7 },
          {
            x: "severe (hospital admission)",
            frequency: 1,
            percentage: 3.2,
          },
        ],
      },
      title: "Frequency distribution of severity of injury",
      finding:
        "Minor injuries without hospital visits were most common (13%), while severe hospital admissions were rare (0.5%).",
    },
    place_of_first_treatment: {
      id: 26,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "home", frequency: 6, percentage: 19.4 },
          { x: "primary health center", frequency: 8, percentage: 25.8 },
          { x: "hospital", frequency: 10, percentage: 32.3 },
          { x: "field clinic", frequency: 7, percentage: 22.6 },
        ],
      },
      title: "Frequency distribution of place of first treatment",
      finding:
        "Hospitals were the most frequent first treatment location (4.8%), while home care was least (2.9%).",
    },
    surgery_needed: {
      id: 27,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [{ x: "No", frequency: 31, percentage: 100 }],
      },
      title: "Frequency distribution of surgery needed",
      finding: "None of the injured required surgery (100% reported 'No').",
    },
    current_status_of_injured_persons: {
      id: 28,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "fully recover", frequency: 23, percentage: 74.2 },
          { x: "partially recover", frequency: 7, percentage: 22.6 },
          { x: "ongoing treatment", frequency: 1, percentage: 3.2 },
        ],
      },
      title: "Frequency distribution of current status of injured persons",
      finding:
        "Most injured persons fully recovered (11.1%), while ongoing treatment was rare (0.5%).",
    },
  },
  F: {
    deceased: {
      id: 29,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "No", frequency: 204, percentage: 98.1 },
          { x: "Yes", frequency: 4, percentage: 1.9 },
        ],
      },
      title: "Frequency distribution of deceased",
      finding:
        "Almost all households (98.1%) reported no deaths, with only 1.9% experiencing fatalities.",
    },
    age_of_death: {
      id: 30,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "10", frequency: 1, percentage: 25 },
          { x: "46", frequency: 1, percentage: 25 },
          { x: "53", frequency: 1, percentage: 25 },
          { x: "54", frequency: 1, percentage: 25 },
        ],
      },
      title: "Frequency distribution of age of death",
      finding:
        "Deaths were spread evenly across ages (10, 46, 53, 54), each accounting for 25%.",
    },
    gender_of_death: {
      id: 31,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Male", frequency: 1, percentage: 25 },
          { x: "Female", frequency: 3, percentage: 75 },
        ],
      },
      title: "Frequency distribution of gender of death",
      finding: "Most of the deceased were female (75%), compared to 25% male.",
    },
    place_of_death: {
      id: 32,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "On way to hospital", frequency: 1, percentage: 25 },
          { x: "At hospital", frequency: 2, percentage: 50 },
          { x: "At home", frequency: 1, percentage: 25 },
        ],
      },
      title: "Frequency distribution of place of death",
      finding:
        "Half of the deaths occurred at hospital (50%), while the rest were split between home and en route (25% each).",
    },
    cause_of_death: {
      id: 33,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "collapsed", frequency: 3, percentage: 75 },
          { x: "trauma", frequency: 1, percentage: 25 },
        ],
      },
      title: "Frequency distribution of cause of death",
      finding:
        "Collapsed structures were the leading cause of death (75%), while trauma accounted for 25%.",
    },
    certified_death: {
      id: 34,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 3, percentage: 75 },
          { x: "unknown", frequency: 1, percentage: 25 },
        ],
      },
      title: "Frequency distribution of certified death",
      finding: "Most deaths were certified (75%), though 25% remained unknown.",
    },
  },
  G: {
    training: {
      id: 35,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [{ x: "No", frequency: 208, percentage: 100 }],
      },
      title: "Frequency distribution of training",
      finding: "None of the respondents (100%) had received disaster training.",
    },
    emergency_plan: {
      id: 36,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [{ x: "No", frequency: 208, percentage: 100 }],
      },
      title: "Frequency distribution of emergency plan",
      finding: "No households (100%) reported having an emergency plan.",
    },
    emergency_kit: {
      id: 37,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 14, percentage: 6.7 },
          { x: "No", frequency: 194, percentage: 93.3 },
        ],
      },
      title: "Frequency distribution of emergency kit",
      finding:
        "Only a small minority (6.7%) had an emergency kit, while 93.3% did not.",
    },
    warnings: {
      id: 38,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 3, percentage: 1.4 },
          { x: "No", frequency: 205, percentage: 98.6 },
        ],
      },
      title: "Frequency distribution of warnings",
      finding:
        "Nearly all households (98.6%) received no warnings before the earthquake.",
    },
    place_stayed_at_1st_2weeks: {
      id: 39,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "home", frequency: 11, percentage: 5.3 },
          { x: "relatives", frequency: 48, percentage: 23.1 },
          { x: "temporary shelter", frequency: 71, percentage: 34.1 },
          { x: "camp", frequency: 20, percentage: 9.6 },
          { x: "outdoor opening area", frequency: 56, percentage: 26.9 },
          { x: "other", frequency: 2, percentage: 1 },
        ],
      },
      title: "Frequency distribution of place stayed at 1st 2weeks",
      finding:
        "Temporary shelters were the most common refuge (34.1%), followed by outdoor open areas (26.9%) and relatives’ homes (23.1%). Very few stayed at home (5.3%) or other places (1%).",
    },
  },
  H: {
    dwellings_damage: {
      id: 40,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "fully collapsed", frequency: 30, percentage: 14.5 },
          { x: "partially collapsed", frequency: 41, percentage: 19.7 },
          { x: "minor damage", frequency: 115, percentage: 55.3 },
          { x: "no damage", frequency: 22, percentage: 10.6 },
        ],
      },
      title: "Frequency distribution of dwellings damage",
      finding:
        "Minor damage was most common (55.3%), while full collapse affected 14.5% of dwellings.",
    },
    cost_of_damage_to_dwellings: {
      id: 41,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "≤100", frequency: 203, percentage: 97.6 },
          { x: ">100", frequency: 5, percentage: 2.4 },
        ],
      },
      title: "Frequency distribution of cost of damage to dwellings",
      finding:
        "Nearly all households (97.6%) reported damage costs ≤100 units, with only 2.4% exceeding that.",
    },
    assistance: {
      id: 42,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 169, percentage: 81.3 },
          { x: "No", frequency: 39, percentage: 18.8 },
        ],
      },
      title: "Frequency distribution of assistance",
      finding:
        "A large majority (81.3%) received assistance, while 18.8% did not.",
    },
  },
  I: {
    emotional_state_during_survey: {
      id: 43,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Calm", frequency: 202, percentage: 97.1 },
          { x: "Distress", frequency: 6, percentage: 2.9 },
        ],
      },
      title: "Frequency distribution of emotional state during survey",
      finding:
        "Most respondents were calm (97.1%), with only 2.9% reporting distress.",
    },
    proxy: {
      id: 44,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "Yes", frequency: 2, percentage: 1 },
          { x: "No", frequency: 206, percentage: 99 },
        ],
      },
      title: "Frequency distribution of proxy",
      finding:
        "Almost all surveys were self-reported (99%), with only 1% using a proxy.",
    },
  },
  J: {
    suggestions: {
      id: 45,
      table_data: {
        head: ["", "frequency", "percentage"],
        body: [
          { x: "strengthening house", frequency: 176, percentage: null },
          {
            x: "community drill/education",
            frequency: 89,
            percentage: null,
          },
          { x: "early warning system", frequency: 129, percentage: null },
          {
            x: "relocation from hazardous zone",
            frequency: 42,
            percentage: null,
          },
          {
            x: "imporve emergency medical services",
            frequency: 134,
            percentage: null,
          },
          {
            x: "finical support/insurance",
            frequency: 52,
            percentage: null,
          },
        ],
      },
      title: "Frequency distribution of suggestions",
      finding:
        "Strengthening houses was the most frequent suggestion (176 mentions), followed by improved emergency medical services (134) and early warning systems (129). Relocation (42) and financial support/insurance (52) were less common.",
    },
  },
};
