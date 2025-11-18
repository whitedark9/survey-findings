import { SurveyData } from "../types/data";

export const data: { [key: string]: SurveyData } = {
  household_members: {
    id: 1,
    title: "Frequency distribution of respondents by household members",
    findings: [
      "The majority of respondents (52.9%) belonged to families <5 members ,47.1% belonged to families > 5 members.",
    ],
    table_data: {
      headers: ["No. of household members", "frequency", "percentage"],
      body: [
        ["<5", 90, 52.9],
        ["5 and above", 80, 47.1],
      ],
    },
    section: "household identification",
  },
  injured_members: {
    id: 2,
    title: "Frequency distribution of respondents by injured members",
    findings: [
      "According to survey, 28.8% of respondents reported that at least one family member experienced injuries, while 71.2% reported no injuries.",
    ],
    table_data: {
      headers: ["Injured members", "frequency", "percentage"],
      body: [
        ["0", 121, 71.2],
        ["1", 40, 23.5],
        ["2", 7, 4.1],
        ["3", 2, 1.2],
      ],
    },
    section: "household identification",
  },
  deceased_members: {
    id: 3,
    title: "Frequency distribution of respondents by deceased members",
    findings: [
      "Based on survey, 18.2% of respondents reported that at least one member died during earthquake, while 81.8% reported no dead.",
    ],
    table_data: {
      headers: ["Deceased members", "frequency", "percentage"],
      body: [
        ["0", 139, 81.8],
        ["1", 14, 8.2],
        ["2", 6, 3.5],
        ["3", 5, 2.9],
        ["4", 1, 0.6],
        ["5", 4, 2.4],
        ["6", 1, 0.6],
      ],
    },
    section: "household identification",
  },
  main_source_of_income: {
    id: 4,
    title: "Frequency distribution of respondents by main source of income",
    findings: [
      "Based on survey, 46.5% of respondents reported that main source of income is from small business/shop.",
    ],
    table_data: {
      headers: ["Source of income", "frequency", "percentage"],
      body: [
        ["Agriculture/farming", 3, 1.8],
        ["Daily labor/ informal work", 39, 22.9],
        ["Small businesses/ shop", 79, 46.5],
        ["Private salaried employment", 34, 20],
        ["Government employment", 6, 3.5],
        ["Remittance/ pensions", 1, 0.6],
        ["Other", 8, 4.7],
      ],
    },
    section: "household socio-economic status",
  },
  monthly_income: {
    id: 5,
    title: "Frequency distribution of monthly income",
    findings: [
      "Based on survey, 68.2% of respondents reported that their monthly incomes were >10 lakhs and 25.3% reported that their monthly incomes were 5-10 lakhs.",
    ],
    table_data: {
      headers: ["Monthly income", "frequency", "percentage"],
      body: [
        ["<5 lakh", 11, 6.5],
        ["5-10 lakh", 43, 25.3],
        [">10 lakh", 116, 68.2],
      ],
    },
    section: "household socio-economic status",
  },
  external_walls_of_dwellings: {
    id: 6,
    title:
      "Frequency distribution of respondents by external walls of dwellings",
    findings: [
      "Most dwellings had reinforced concrete (37.6%) and bamboo/wood (33.5%) walls.",
    ],
    table_data: {
      headers: ["External wall", "frequency", "percentage"],
      body: [
        ["Bamboo/ thatch/ wood", 57, 33.5],
        ["Sun-dried brick", 9, 5.3],
        ["Burnt brick /masonry", 39, 22.9],
        ["Reinforced concrete (RC)/modern construction", 64, 37.6],
        ["Other", 1, 0.6],
      ],
    },
    section: "household socio-economic status",
  },
  roof_material: {
    id: 7,
    title: "Frequency distribution of respondents by roof material",
    findings: [
      "Roofs were mainly corrugated metal (40.6%) or concrete slabs/tiled (39.4%), with 20% using thatch/thin metal.",
    ],
    table_data: {
      headers: ["Roof material", "frequency", "percentage"],
      body: [
        ["Thatch/ corrugated thin metal", 34, 20],
        ["Corrugated metal (properly fixed)", 69, 40.6],
        ["Concrete slab / tiled roof", 67, 39.4],
      ],
    },
    section: "household socio-economic status",
  },
  storeys_of_dwellings: {
    id: 8,
    title:
      "Frequency distribution of respondents by number of storeys of dwellings",
    findings: [
      "Majority of dwellings were 2-storey (50.6%), while 22.4% had 7 storeys.",
    ],
    table_data: {
      headers: ["No. of storeys of dwellings", "frequency", "percentage"],
      body: [
        ["1", 11, 6.5],
        ["2", 86, 50.6],
        ["3", 6, 3.5],
        ["4", 10, 5.9],
        ["5", 5, 2.9],
        ["6", 13, 7.6],
        ["7", 38, 22.4],
        ["8", 1, 0.6],
      ],
    },
    section: "household socio-economic status",
  },
  years_built: {
    id: 9,
    title: "Frequency distribution of dwellings by years built",
    findings: [
      "Most dwellings (85.3%) were built more than 10 years ago, showing older housing stock.",
    ],
    table_data: {
      headers: ["Years built", "frequency", "percentage"],
      body: [
        ["<10 years", 25, 14.7],
        ["10 years and above", 145, 85.3],
      ],
    },
    section: "household socio-economic status",
  },
  ownership_of_dwellings: {
    id: 10,
    title: "Frequency distribution of respondents by ownership of dwellings",
    findings: [
      "64.1% owned their homes, while 31.8% rented, and 1.2% occupied without formal title.",
    ],
    table_data: {
      headers: ["Ownership", "frequency", "percentage"],
      body: [
        ["Owned by household", 109, 64.1],
        ["Rented", 54, 31.8],
        ["Occupied without formal title", 2, 1.2],
        ["Other", 5, 2.9],
      ],
    },
    section: "household socio-economic status",
  },
  access_to_phone: {
    id: 11,
    title: "Frequency distribution of access to phone",
    findings: [
      "Nearly universal access to phones (99.4%), with only 0.6% lacking access.",
    ],
    table_data: {
      headers: ["Access to phone", "frequency", "percentage"],
      body: [
        ["No", 1, 0.6],
        ["Yes", 169, 99.4],
      ],
    },
    section: "household socio-economic status",
  },
  access_to_radio: {
    id: 12,
    title: "Frequency distribution of access to radio",
    findings: ["75.9% had access to radio, while 24.1% did not."],
    table_data: {
      headers: ["Access to radio", "frequency", "percentage"],
      body: [
        ["No", 41, 24.1],
        ["Yes", 129, 75.9],
      ],
    },
    section: "household socio-economic status",
  },
  gender: {
    id: 13,
    title: "Frequency distribution of respondents according to gender",
    findings: [
      "Majority of respondents were female (72.4%), with males making up 27.6%.",
    ],
    table_data: {
      headers: ["Gender", "frequency", "percentage"],
      body: [
        ["Male", 47, 27.6],
        ["Female", 123, 72.4],
      ],
    },
    section: "individual demographic information",
  },
  relationship_to_head: {
    id: 14,
    title: "Frequency distribution of respondents by relationship to head",
    findings: [
      "Respondents were mostly spouses (35.9%) and heads of household (32.9%), followed by children (17.6%).",
    ],
    table_data: {
      headers: ["Relations", "frequency", "percentage"],
      body: [
        ["Head", 56, 32.9],
        ["Spouse", 61, 35.9],
        ["Children", 30, 17.6],
        ["Parent", 10, 5.9],
        ["Other", 13, 7.6],
      ],
    },
    section: "individual demographic information",
  },
  education_levels: {
    id: 15,
    title: "Frequency distribution of respondent according to education levels",
    findings: [
      "Most respondents had primary (32.4%) and secondary (27.1%) education, while 17.6% had university-level education.",
    ],
    table_data: {
      headers: ["Education levels", "frequency", "percentage"],
      body: [
        ["No formal education", 11, 6.5],
        ["Primary", 55, 32.4],
        ["Secondary", 46, 27.1],
        ["Higher secondary", 28, 16.5],
        ["University/ tertiary", 30, 17.6],
      ],
    },
    section: "individual demographic information",
  },
  occupation_at_time: {
    id: 16,
    title: "Frequency distribution of occupation at time of earthquake",
    findings: [
      "Majority of respondents (42.4%) were dependents and 25.9% had own business.",
    ],
    table_data: {
      headers: ["Occupation", "frequency", "percentage"],
      body: [
        ["Aircon repair", 1, 0.6],
        ["Daily labour", 26, 15.3],
        ["Dependent", 72, 42.4],
        ["Driver", 2, 1.2],
        ["Office Staff", 9, 5.3],
        ["Own business", 44, 25.9],
        ["Pensioner", 1, 0.6],
        ["Private employer", 1, 0.6],
        ["Teacher", 4, 2.4],
        ["Student", 10, 5.9],
      ],
    },
    section: "individual demographic information",
  },
  place_at_time: {
    id: 17,
    title:
      "Frequency distribution of respondents by place at the time of earthquake",
    findings: [
      "Nearly half (45.9%) were inside ground-floor homes, while 25.9% were on upper floors, and 14.1% in public buildings.",
    ],
    table_data: {
      headers: ["Place", "frequency", "percentage"],
      body: [
        ["Inside home-ground floor", 78, 45.9],
        ["Inside home-upper floor", 44, 25.9],
        ["In structural public buildings", 24, 14.1],
        ["Outside near home (yard, street)", 20, 11.8],
        ["In vehicle", 2, 1.2],
        ["Other", 2, 1.2],
      ],
    },
    section: "exposure circumstances during earthquake",
  },
  person_asleep: {
    id: 18,
    title: "Frequency distribution of person asleep at the time of earthquake",
    findings: ["Majority (93.5%) were awake, only 6.5% asleep."],
    table_data: {
      headers: ["Person asleep", "frequency", "percentage"],
      body: [
        ["No", 159, 93.5],
        ["Yes", 11, 6.5],
      ],
    },
    section: "exposure circumstances during earthquake",
  },
  attempt_to_evacuate: {
    id: 19,
    title:
      "Frequency distribution of respondents by number of people who attempt to evacuate",
    findings: ["70.6% attempted evacuation, while 29.4% did not."],
    table_data: {
      headers: ["Attempt to evacuate", "frequency", "percentage"],
      body: [
        ["No", 50, 29.4],
        ["Yes", 120, 70.6],
      ],
    },
    section: "exposure circumstances during earthquake",
  },
  time_to_evacuate: {
    id: 20,
    title:
      "Frequency distribution of times from earthquake start to evacuations",
    findings: [
      "Most evacuations (78.2%) occurred within 10 minutes of the earthquake.",
    ],
    table_data: {
      headers: ["Time in mins", "frequency", "percentage"],
      body: [
        ["<10 mins", 133, 78.2],
        ["10 and above", 37, 21.8],
      ],
    },
    section: "exposure circumstances during earthquake",
  },
  struck_by_debris: {
    id: 21,
    title: "Frequency distribution of person struck by falling debris",
    findings: ["26.5% were struck by debris, while 73.5% were not."],
    table_data: {
      headers: ["Person struck", "frequency", "percentage"],
      body: [
        ["No", 125, 73.5],
        ["Yes", 45, 26.5],
      ],
    },
    section: "exposure circumstances during earthquake",
  },
  injured_members_yes_no: {
    id: 22,
    title: "Frequency distribution of injured members",
    findings: ["28.8% reported injuries, while 71.2% reported none."],
    table_data: {
      headers: ["Injured members", "frequency", "percentage"],
      body: [
        ["No", 121, 71.2],
        ["Yes", 49, 28.8],
      ],
    },
    section: "injury clinical outcome",
  },
  nature_of_injury: {
    id: 23,
    title: "Frequency distribution of injured members by nature of injury",
    findings: [
      "Soft tissue injuries/lacerations were most common (42.9%), followed by crush injuries (24.5%).",
    ],
    table_data: {
      headers: ["Nature of injury", "frequency", "percentage"],
      body: [
        ["Fracture", 9, 18.4],
        ["Head injury/ concussion", 6, 12.2],
        ["Soft tissue injury/ laceration", 21, 42.9],
        ["Crush injury", 12, 24.5],
        ["Other", 1, 2],
      ],
    },
    section: "injury clinical outcome",
  },
  severity_of_injury: {
    id: 24,
    title: "Frequency distribution of injured members by severity of injury",
    findings: [
      "Injuries ranged from minor (36.7%) to life-threatening/disabling (20.4%), showing diverse severity.",
    ],
    table_data: {
      headers: ["Severity", "frequency", "percentage"],
      body: [
        ["Minor", 18, 36.7],
        ["Moderate (OPD)", 10, 20.4],
        ["Severe (admission)", 11, 22.4],
        ["Life-threatening/long term disability", 10, 20.4],
      ],
    },
    section: "injury clinical outcome",
  },
  place_of_first_treatment: {
    id: 25,
    title: "Frequency distribution of places of first treatment",
    findings: [
      "Most injured sought hospital care (44.9%), while 24.5% treated themselves at home.",
    ],
    table_data: {
      headers: ["Place", "frequency", "percentage"],
      body: [
        ["Home/self", 12, 24.5],
        ["PHC", 7, 14.3],
        ["Hospital", 22, 44.9],
        ["Field clinic/ NGO", 6, 12.2],
        ["Other", 2, 4.1],
      ],
    },
    section: "injury clinical outcome",
  },
  surgery: {
    id: 26,
    title: "Frequency distribution of injured patients who had gone surgery",
    findings: ["22.4% underwent surgery, while 77.6% did not."],
    table_data: {
      headers: ["Surgical intervention", "frequency", "percentage"],
      body: [
        ["No", 38, 77.6],
        ["Yes", 11, 22.4],
      ],
    },
    section: "injury clinical outcome",
  },
  current_status_injured: {
    id: 27,
    title:
      "Frequency distribution of current status of injured persons (at the time of interview)",
    findings: [
      "46.9% fully recovered, while 24.5% had died, and 22.4% had partial recovery/disability.",
    ],
    table_data: {
      headers: ["Current status", "frequency", "percentage"],
      body: [
        ["Fully recovered", 23, 46.9],
        ["Partially recovered/disability", 11, 22.4],
        ["Ongoing treatment", 3, 6.1],
        ["Deceased", 12, 24.5],
      ],
    },
    section: "injury clinical outcome",
  },
  deceased_by_age: {
    id: 28,
    title: "Frequency distribution of deceased persons by age",
    findings: [
      "Majority of deceased were aged 40–64 years (41.9%), followed by 5–39 years (35.5%).",
    ],
    table_data: {
      headers: ["Age", "frequency", "percentage"],
      body: [
        ["Under 5 years", 3, 9.7],
        ["5-39 years", 11, 35.5],
        ["40-64 years", 13, 41.9],
        ["65 years and above", 4, 12.9],
      ],
    },
    section: "deceased persons",
  },
  deceased_by_gender: {
    id: 29,
    title: "Frequency distribution of deceased persons by gender",
    findings: [
      "Most deceased were female (83.9%), with males accounting for 16.1%.",
    ],
    table_data: {
      headers: ["Gender", "frequency", "percentage"],
      body: [
        ["Male", 5, 16.1],
        ["Female", 26, 83.9],
      ],
    },
    section: "deceased persons",
  },
  place_of_death: {
    id: 30,
    title: "Frequency distribution of place of death",
    findings: ["Nearly all deaths (96.8%) occurred at home."],
    table_data: {
      headers: ["Place", "frequency", "percentage"],
      body: [
        ["At home", 30, 96.8],
        ["Public buildings", 1, 3.2],
      ],
    },
    section: "deceased persons",
  },
  cause_of_death: {
    id: 31,
    title: "Frequency distribution of cause of death",
    findings: [
      "Collapse of structures was the leading cause (87.1%), followed by crushing (12.9%).",
    ],
    table_data: {
      headers: ["Cause", "frequency", "percentage"],
      body: [
        ["Collapse", 27, 87.1],
        ["Crushing", 4, 12.9],
      ],
    },
    section: "deceased persons",
  },
  death_certified: {
    id: 32,
    title: "Frequency distribution of death certified",
    findings: ["All of deceased persons are certified."],
    table_data: {
      headers: ["Certified", "frequency", "percentage"],
      body: [["Yes", 31, 100]],
    },
    section: "deceased persons",
  },
  earthquake_training: {
    id: 33,
    title:
      "Frequency distribution of household participated in earthquake training",
    findings: [
      "None of the households (100%) had participated in earthquake training.",
    ],
    table_data: {
      headers: ["Earthquake training", "frequency", "percentage"],
      body: [["No", 170, 100]],
    },
    section: "household preparedness response",
  },
  emergency_plan: {
    id: 34,
    title: "Frequency distribution of household having emergency plan",
    findings: ["No households (100%) reported having an emergency plan."],
    table_data: {
      headers: ["Emergency plan", "frequency", "percentage"],
      body: [["No", 170, 100]],
    },
    section: "household preparedness response",
  },
  emergency_kit: {
    id: 35,
    title: "Frequency distribution of household having emergency kit",
    findings: ["No households (100%) had emergency kits."],
    table_data: {
      headers: ["Emergency kit", "frequency", "percentage"],
      body: [["No", 170, 100]],
    },
    section: "household preparedness response",
  },
  early_warnings: {
    id: 36,
    title: "Frequency distribution of household receiving early warnings",
    findings: ["No households (100%) received early warnings."],
    table_data: {
      headers: ["Receiving early warnings", "frequency", "percentage"],
      body: [["No", 170, 100]],
    },
    section: "household preparedness response",
  },
  place_stayed_first_2_weeks: {
    id: 37,
    title: "Frequency distribution of place stayed first 2 weeks",
    findings: [
      "Majority stayed in temporary shelters (30%) or camps (22.9%), while 20% stayed outdoors.",
    ],
    table_data: {
      headers: ["Place", "frequency", "percentage"],
      body: [
        ["Home", 22, 12.9],
        ["Relative/Friends", 18, 10.6],
        ["Temporary shelter", 51, 30],
        ["Camp", 39, 22.9],
        ["Outdoors", 34, 20],
        ["Other/open area", 6, 3.5],
      ],
    },
    section: "household preparedness response",
  },
  dwellings_collapsed: {
    id: 38,
    title: "Frequency distribution of dwellings collapsed",
    findings: [
      "35.9% of dwellings fully collapsed, 20.6% partially collapsed, while 32.9% had minor damage.",
    ],
    table_data: {
      headers: ["Dwellings collapsed", "frequency", "percentage"],
      body: [
        ["Fully collapsed", 61, 35.9],
        ["Partially collapsed", 35, 20.6],
        ["Minor damage", 56, 32.9],
        ["No damage", 18, 10.6],
      ],
    },
    section: "perception suggestions",
  },
  estimated_cost_damage: {
    id: 39,
    title: "Frequency distribution of estimated cost of damage (lakh)",
    findings: [
      "Half (50.6%) reported damages under 10 lakh, while 25.9% had damages between 100–1000 lakh.",
    ],
    table_data: {
      headers: ["Estimated cost", "frequency", "percentage"],
      body: [
        ["<10 lakh", 86, 50.6],
        ["10 to 100 lakh", 38, 22.4],
        ["Between 100 to 1000 lakh", 44, 25.9],
        [">1000 lakh", 2, 1.2],
      ],
    },
    section: "perception suggestions",
  },
  loss_of_income: {
    id: 40,
    title: "Frequency distribution of loss of income (percentage)",
    findings: [
      "38.8% lost 80% or more of income, while 30.6% lost between 50–79%.",
    ],
    table_data: {
      headers: ["Percent reduction", "frequency", "percentage"],
      body: [
        ["<10", 15, 8.8],
        ["10 to 49", 37, 21.8],
        ["50 to 79", 52, 30.6],
        ["80 and above", 66, 38.8],
      ],
    },
    section: "perception suggestions",
  },
  assistance_received: {
    id: 41,
    title: "Frequency distribution of assistance received",
    findings: ["Nearly all respondents (98.2%) received assistance."],
    table_data: {
      headers: ["Assistance received", "frequency", "percentage"],
      body: [
        ["No", 3, 1.8],
        ["Yes", 167, 98.2],
      ],
    },
    section: "perception suggestions",
  },
  type_of_assistance: {
    id: 42,
    title: "Frequency distribution of type of assistance",
    findings: [
      "Food (90.6%), cash (81.2%), medical (80.6%), and shelter materials (80%) were the main forms of aid.",
    ],
    table_data: {
      headers: ["Type of assistance", "frequency", "percentage"],
      body: [
        ["Food", 154, 90.6],
        ["Shelter materials", 136, 80],
        ["Cash", 138, 81.2],
        ["Medical", 137, 80.6],
      ],
    },
    section: "perception suggestions",
  },
  main_reason: {
    id: 43,
    title: "Frequency distribution of main reason in the interviewer view",
    findings: [
      "Causes were equally attributed to natural disaster (50%) and missing systems (50%).",
    ],
    table_data: {
      headers: ["Main reason", "frequency", "percentage"],
      body: [
        ["Natural disaster", 85, 50],
        ["Missing system", 85, 50],
      ],
    },
    section: "damage economic impact",
  },
  suggestions_by_interviewers: {
    id: 44,
    title: "Frequency distribution of suggestions by interviewers",
    findings: [
      "88.2% of interviewers suggest to strengthen the house and 70.6% suggest for early warning system.",
    ],
    table_data: {
      headers: ["Suggestions", "frequency", "percentage"],
      body: [
        ["Strengthen houses/ retrofitting", 150, 88.2],
        ["Community drills/ education", 85, 50],
        ["Early warning systems", 120, 70.6],
        ["Relocation from hazardous zone", 45, 26.5],
        ["Improved emergency medical services", 68, 40],
        ["Financial support / insurance", 41, 24.1],
      ],
    },
    section: "damage economic impact",
  },
  emotional_state: {
    id: 45,
    title: "Frequency distribution of type of emotional state",
    findings: [
      "Majority (95.9%) reported being calm, while 4.1% were distressed.",
    ],
    table_data: {
      headers: ["Emotional state", "frequency", "percentage"],
      body: [
        ["Calm", 163, 95.9],
        ["Distressed", 7, 4.1],
      ],
    },
    section: "interviewer observations",
  },
  proxy_of_respondents: {
    id: 46,
    title: "Frequency distribution of proxy of respondents",
    findings: [
      "85.3% of respondents answered directly, while 14.7% responded through a proxy.",
    ],
    table_data: {
      headers: ["Proxy", "frequency", "percentage"],
      body: [
        ["No", 145, 85.3],
        ["Yes", 25, 14.7],
      ],
    },
    section: "interviewer observations",
  },
  injured_members_within_walls: {
    id: 47,
    title:
      "Frequency distribution of injured members within walls of dwellings",
    findings: [
      "All of injured members 49 (28.8%) were within the walls of dwellings in earthquake",
      "There is an association between injured members and walls of dwellings",
    ],
    p_value: 0.043,
    table_data: {
      headers: ["External wall", "Injured within walls (%)", "Not injured (%)"],
      body: [
        ["Bamboo/ thatch/ wood", 15, 42],
        ["Sun-dried brick", 6, 3],
        ["Burnt brick /masonry", 7, 32],
        ["Reinforced concrete (RC)/modern construction", 21, 43],
        ["Other", 0, 1],
      ],
    },
    section: "association between injured memebers and other conditions",
  },
  injured_members_within_roof: {
    id: 48,
    title: "Frequency distribution of injured members within roof material",
    findings: [
      "All of the injured members 28.8% were within the roof material during earthquake",
      "There is an association between injured members and roof material",
    ],
    p_value: 0.004,
    table_data: {
      headers: [
        "Roof material",
        "Injured within roof (%)",
        "Not injured within roof (%)",
      ],
      body: [
        ["Thatch/ corrugated thin metal", 7, 27],
        ["Corrugated metal (properly fixed)", 13, 56],
        ["Concrete slab / tiled roof", 29, 38],
      ],
    },
    section: "association between injured memebers and other conditions",
  },
  injured_members_by_ownership: {
    id: 49,
    title:
      "Frequency distribution of injured members by ownership of dwellings",
    findings: [
      "Among owners of household, 23.9% got injured and 37% of persons who rented the dwelling got injured during earthquake",
      "There is an association between injured members and ownership of dwellings",
    ],
    p_value: 0.038,
    table_data: {
      headers: ["Ownership", "Injured within ownership (%)", "Not injured (%)"],
      body: [
        ["Owned by household", 26, 83],
        ["Rented", 20, 34],
        ["Occupied without formal title", 2, 0],
        ["Other", 1, 4],
      ],
    },
    section: "association between injured memebers and other conditions",
  },
  injured_members_struck_by_debris: {
    id: 50,
    title: "Frequency distribution of injured members struck by falling debris",
    findings: [
      "Among persons who got struck by falling debris, 68.9% got injured and 14.4% got injured without striking by falling debris",
      "There is an association between injured members and struck by falling debris",
    ],
    p_value: 0,
    table_data: {
      headers: ["Person struck", "Injured (%)", "Not injured (%)"],
      body: [
        ["No", 18, 107],
        ["Yes", 31, 14],
      ],
    },
    section: "association between injured memebers and other conditions",
  },
};
