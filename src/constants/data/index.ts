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
        { x: "<5", frequency: 90, percentage: 52.9 },
        { x: "5 and above", frequency: 80, percentage: 47.1 },
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
        { x: "0", frequency: 121, percentage: 71.2 },
        { x: "1", frequency: 40, percentage: 23.5 },
        { x: "2", frequency: 7, percentage: 4.1 },
        { x: "3", frequency: 2, percentage: 1.2 },
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
        { x: "0", frequency: 139, percentage: 81.8 },
        { x: "1", frequency: 14, percentage: 8.2 },
        { x: "2", frequency: 6, percentage: 3.5 },
        { x: "3", frequency: 5, percentage: 2.9 },
        { x: "4", frequency: 1, percentage: 0.6 },
        { x: "5", frequency: 4, percentage: 2.4 },
        { x: "6", frequency: 1, percentage: 0.6 },
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
        { x: "Agriculture/farming", frequency: 3, percentage: 1.8 },
        {
          x: "Daily labor/ informal work",
          frequency: 39,
          percentage: 22.9,
        },
        { x: "Small businesses/ shop", frequency: 79, percentage: 46.5 },
        {
          x: "Private salaried employment",
          frequency: 34,
          percentage: 20,
        },
        { x: "Government employment", frequency: 6, percentage: 3.5 },
        { x: "Remittance/ pensions", frequency: 1, percentage: 0.6 },
        { x: "Other", frequency: 8, percentage: 4.7 },
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
        { x: "<5 lakh", frequency: 11, percentage: 6.5 },
        { x: "5-10 lakh", frequency: 43, percentage: 25.3 },
        { x: ">10 lakh", frequency: 116, percentage: 68.2 },
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
        { x: "Bamboo/ thatch/ wood", frequency: 57, percentage: 33.5 },
        { x: "Sun-dried brick", frequency: 9, percentage: 5.3 },
        { x: "Burnt brick /masonry", frequency: 39, percentage: 22.9 },
        {
          x: "Reinforced concrete (RC)/modern construction",
          frequency: 64,
          percentage: 37.6,
        },
        { x: "Other", frequency: 1, percentage: 0.6 },
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
        {
          x: "Thatch/ corrugated thin metal",
          frequency: 34,
          percentage: 20,
        },
        {
          x: "Corrugated metal (properly fixed)",
          frequency: 69,
          percentage: 40.6,
        },
        {
          x: "Concrete slab / tiled roof",
          frequency: 67,
          percentage: 39.4,
        },
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
        { x: "1", frequency: 11, percentage: 6.5 },
        { x: "2", frequency: 86, percentage: 50.6 },
        { x: "3", frequency: 6, percentage: 3.5 },
        { x: "4", frequency: 10, percentage: 5.9 },
        { x: "5", frequency: 5, percentage: 2.9 },
        { x: "6", frequency: 13, percentage: 7.6 },
        { x: "7", frequency: 38, percentage: 22.4 },
        { x: "8", frequency: 1, percentage: 0.6 },
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
        { x: "<10 years", frequency: 25, percentage: 14.7 },
        { x: "10 years and above", frequency: 145, percentage: 85.3 },
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
        { x: "Owned by household", frequency: 109, percentage: 64.1 },
        { x: "Rented", frequency: 54, percentage: 31.8 },
        {
          x: "Occupied without formal title",
          frequency: 2,
          percentage: 1.2,
        },
        { x: "Other", frequency: 5, percentage: 2.9 },
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
        { x: "No", frequency: 1, percentage: 0.6 },
        { x: "Yes", frequency: 169, percentage: 99.4 },
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
        { x: "No", frequency: 41, percentage: 24.1 },
        { x: "Yes", frequency: 129, percentage: 75.9 },
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
        { x: "Male", frequency: 47, percentage: 27.6 },
        { x: "Female", frequency: 123, percentage: 72.4 },
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
        { x: "Head", frequency: 56, percentage: 32.9 },
        { x: "Spouse", frequency: 61, percentage: 35.9 },
        { x: "Children", frequency: 30, percentage: 17.6 },
        { x: "Parent", frequency: 10, percentage: 5.9 },
        { x: "Other", frequency: 13, percentage: 7.6 },
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
        { x: "No formal education", frequency: 11, percentage: 6.5 },
        { x: "Primary", frequency: 55, percentage: 32.4 },
        { x: "Secondary", frequency: 46, percentage: 27.1 },
        { x: "Higher secondary", frequency: 28, percentage: 16.5 },
        { x: "University/ tertiary", frequency: 30, percentage: 17.6 },
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
        { x: "Aircon repair", frequency: 1, percentage: 0.6 },
        { x: "Daily labour", frequency: 26, percentage: 15.3 },
        { x: "Dependent", frequency: 72, percentage: 42.4 },
        { x: "Driver", frequency: 2, percentage: 1.2 },
        { x: "Office Staff", frequency: 9, percentage: 5.3 },
        { x: "Own business", frequency: 44, percentage: 25.9 },
        { x: "Pensioner", frequency: 1, percentage: 0.6 },
        { x: "Private employer", frequency: 1, percentage: 0.6 },
        { x: "Teacher", frequency: 4, percentage: 2.4 },
        { x: "Student", frequency: 10, percentage: 5.9 },
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
        {
          x: "Inside home-ground floor",
          frequency: 78,
          percentage: 45.9,
        },
        { x: "Inside home-upper floor", frequency: 44, percentage: 25.9 },
        {
          x: "In structural public buildings",
          frequency: 24,
          percentage: 14.1,
        },
        {
          x: "Outside near home (yard, street)",
          frequency: 20,
          percentage: 11.8,
        },
        { x: "In vehicle", frequency: 2, percentage: 1.2 },
        { x: "Other", frequency: 2, percentage: 1.2 },
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
        { x: "No", frequency: 159, percentage: 93.5 },
        { x: "Yes", frequency: 11, percentage: 6.5 },
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
        { x: "No", frequency: 50, percentage: 29.4 },
        { x: "Yes", frequency: 120, percentage: 70.6 },
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
        { x: "<10 mins", frequency: 133, percentage: 78.2 },
        { x: "10 and above", frequency: 37, percentage: 21.8 },
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
        { x: "No", frequency: 125, percentage: 73.5 },
        { x: "Yes", frequency: 45, percentage: 26.5 },
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
        { x: "No", frequency: 121, percentage: 71.2 },
        { x: "Yes", frequency: 49, percentage: 28.8 },
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
        { x: "Fracture", frequency: 9, percentage: 18.4 },
        { x: "Head injury/ concussion", frequency: 6, percentage: 12.2 },
        {
          x: "Soft tissue injury/ laceration",
          frequency: 21,
          percentage: 42.9,
        },
        { x: "Crush injury", frequency: 12, percentage: 24.5 },
        { x: "Other", frequency: 1, percentage: 2 },
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
        { x: "Minor", frequency: 18, percentage: 36.7 },
        { x: "Moderate (OPD)", frequency: 10, percentage: 20.4 },
        { x: "Severe (admission)", frequency: 11, percentage: 22.4 },
        {
          x: "Life-threatening/long term disability",
          frequency: 10,
          percentage: 20.4,
        },
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
        { x: "Home/self", frequency: 12, percentage: 24.5 },
        { x: "PHC", frequency: 7, percentage: 14.3 },
        { x: "Hospital", frequency: 22, percentage: 44.9 },
        { x: "Field clinic/ NGO", frequency: 6, percentage: 12.2 },
        { x: "Other", frequency: 2, percentage: 4.1 },
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
        { x: "No", frequency: 38, percentage: 77.6 },
        { x: "Yes", frequency: 11, percentage: 22.4 },
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
        { x: "Fully recovered", frequency: 23, percentage: 46.9 },
        {
          x: "Partially recovered/disability",
          frequency: 11,
          percentage: 22.4,
        },
        { x: "Ongoing treatment", frequency: 3, percentage: 6.1 },
        { x: "Deceased", frequency: 12, percentage: 24.5 },
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
        { x: "Under 5 years", frequency: 3, percentage: 9.7 },
        { x: "5-39 years", frequency: 11, percentage: 35.5 },
        { x: "40-64 years", frequency: 13, percentage: 41.9 },
        { x: "65 years and above", frequency: 4, percentage: 12.9 },
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
        { x: "Male", frequency: 5, percentage: 16.1 },
        { x: "Female", frequency: 26, percentage: 83.9 },
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
        { x: "At home", frequency: 30, percentage: 96.8 },
        { x: "Public buildings", frequency: 1, percentage: 3.2 },
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
        { x: "Collapse", frequency: 27, percentage: 87.1 },
        { x: "Crushing", frequency: 4, percentage: 12.9 },
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
      body: [{ x: "Yes", frequency: 31, percentage: 100 }],
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
      body: [{ x: "No", frequency: 170, percentage: 100 }],
    },
    section: "household preparedness response",
  },
  emergency_plan: {
    id: 34,
    title: "Frequency distribution of household having emergency plan",
    findings: ["No households (100%) reported having an emergency plan."],
    table_data: {
      headers: ["Emergency plan", "frequency", "percentage"],
      body: [{ x: "No", frequency: 170, percentage: 100 }],
    },
    section: "household preparedness response",
  },
  emergency_kit: {
    id: 35,
    title: "Frequency distribution of household having emergency kit",
    findings: ["No households (100%) had emergency kits."],
    table_data: {
      headers: ["Emergency kit", "frequency", "percentage"],
      body: [{ x: "No", frequency: 170, percentage: 100 }],
    },
    section: "household preparedness response",
  },
  early_warnings: {
    id: 36,
    title: "Frequency distribution of household receiving early warnings",
    findings: ["No households (100%) received early warnings."],
    table_data: {
      headers: ["Receiving early warnings", "frequency", "percentage"],
      body: [{ x: "No", frequency: 170, percentage: 100 }],
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
        { x: "Home", frequency: 22, percentage: 12.9 },
        { x: "Relative/Friends", frequency: 18, percentage: 10.6 },
        { x: "Temporary shelter", frequency: 51, percentage: 30 },
        { x: "Camp", frequency: 39, percentage: 22.9 },
        { x: "Outdoors", frequency: 34, percentage: 20 },
        { x: "Other/open area", frequency: 6, percentage: 3.5 },
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
        { x: "Fully collapsed", frequency: 61, percentage: 35.9 },
        { x: "Partially collapsed", frequency: 35, percentage: 20.6 },
        { x: "Minor damage", frequency: 56, percentage: 32.9 },
        { x: "No damage", frequency: 18, percentage: 10.6 },
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
        { x: "<10 lakh", frequency: 86, percentage: 50.6 },
        { x: "10 to 100 lakh", frequency: 38, percentage: 22.4 },
        {
          x: "Between 100 to 1000 lakh",
          frequency: 44,
          percentage: 25.9,
        },
        { x: ">1000 lakh", frequency: 2, percentage: 1.2 },
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
        { x: "<10", frequency: 15, percentage: 8.8 },
        { x: "10 to 49", frequency: 37, percentage: 21.8 },
        { x: "50 to 79", frequency: 52, percentage: 30.6 },
        { x: "80 and above", frequency: 66, percentage: 38.8 },
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
        { x: "No", frequency: 3, percentage: 1.8 },
        { x: "Yes", frequency: 167, percentage: 98.2 },
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
        { x: "Food", frequency: 154, percentage: 90.6 },
        { x: "Shelter materials", frequency: 136, percentage: 80 },
        { x: "Cash", frequency: 138, percentage: 81.2 },
        { x: "Medical", frequency: 137, percentage: 80.6 },
      ],
    },
    section: "perception suggestions",
  },
  main_reason: {
    id: 43,
    title: "Frequency distribution of main reason in the interviewer view",
    findings: ["Causes were equally attributed to natural disaster (50%)."],
    table_data: {
      headers: ["Main reason", "frequency", "percentage"],
      body: [{ x: "Natural disaster", frequency: 85, percentage: 50 }],
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
        {
          x: "Strengthen houses/ retrofitting",
          frequency: 150,
          percentage: 88.2,
        },
        {
          x: "Community drills/ education",
          frequency: 85,
          percentage: 50,
        },
        { x: "Early warning systems", frequency: 120, percentage: 70.6 },
        {
          x: "Relocation from hazardous zone",
          frequency: 45,
          percentage: 26.5,
        },
        {
          x: "Improved emergency medical services",
          frequency: 68,
          percentage: 40,
        },
        {
          x: "Financial support / insurance",
          frequency: 41,
          percentage: 24.1,
        },
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
        { x: "Calm", frequency: 163, percentage: 95.9 },
        { x: "Distressed", frequency: 7, percentage: 4.1 },
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
        { x: "No", frequency: 145, percentage: 85.3 },
        { x: "Yes", frequency: 25, percentage: 14.7 },
      ],
    },
    section: "interviewer observations",
  },
  injured_members_within_walls: {
    id: 47,
    title: "Association between injured members and walls of dwellings",
    findings: [
      "There is an association between injured members and walls of dwellings",
    ],
    p_value: 0.043,
    table_data: {
      headers: ["External wall", "Injured (%)", "Not injured (%)"],
      body: [
        { x: "Bamboo/ thatch/ wood", frequency: 15, percentage: 42 },
        { x: "Sun-dried brick", frequency: 6, percentage: 3 },
        { x: "Burnt brick /masonry", frequency: 7, percentage: 32 },
        {
          x: "Reinforced concrete (RC)/modern construction",
          frequency: 21,
          percentage: 43,
        },
        { x: "Other", frequency: 0, percentage: 1 },
      ],
    },
    section: "association between injured members and other conditions",
  },
  injured_members_within_roof: {
    id: 48,
    title: "Association between injured members and roof material",
    findings: [
      "There is an association between injured members and roof material",
    ],
    p_value: 0.004,
    table_data: {
      headers: ["Roof material", "Injured (%)", "Not injured (%)"],
      body: [
        {
          x: "Thatch/ corrugated thin metal",
          frequency: 7,
          percentage: 27,
        },
        {
          x: "Corrugated metal (properly fixed)",
          frequency: 13,
          percentage: 56,
        },
        { x: "Concrete slab / tiled roof", frequency: 29, percentage: 38 },
      ],
    },
    section: "association between injured members and other conditions",
  },
  injured_members_by_ownership: {
    id: 49,
    title: "Association between injured members and ownership of dwellings",
    findings: [
      "There is an association between injured members and ownership of dwellings",
    ],
    p_value: 0.038,
    table_data: {
      headers: ["Ownership", "Injured (%)", "Not injured (%)"],
      body: [
        { x: "Owned by household", frequency: 26, percentage: 83 },
        { x: "Rented", frequency: 20, percentage: 34 },
        {
          x: "Occupied without formal title",
          frequency: 2,
          percentage: 0,
        },
        { x: "Other", frequency: 1, percentage: 4 },
      ],
    },
    section: "association between injured members and other conditions",
  },
  injured_members_struck_by_debris: {
    id: 50,
    title: "Association between injured members struck and falling debris",
    findings: [
      "There is an association between injured members and struck by falling debris",
    ],
    p_value: 0,
    table_data: {
      headers: ["Person struck", "Injured (%)", "Not injured (%)"],
      body: [
        { x: "No", frequency: 18, percentage: 107 },
        { x: "Yes", frequency: 31, percentage: 14 },
      ],
    },
    section: "association between injured members and other conditions",
  },
};
