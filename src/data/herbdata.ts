// src/data/herbdata.ts

export interface HerbData {
    id: string;
    name: string;
    category: string;
    description: string;
    iconUrl: string;
  }
  
  export const herbData: HerbData[] = [
    { id: "1", name: "Parsley", category: "Herbs", description: "Rich in vitamins A, C, and K, supports digestion and immunity", iconUrl: "/icons/herb-icon.svg" },
    { id: "2", name: "Sage", category: "Herbs", description: "Supports brain health, digestion, and has anti-inflammatory properties", iconUrl: "/icons/herb-icon.svg" },
    { id: "3", name: "Basil", category: "Herbs", description: "Promotes heart health and helps reduce stress and inflammation", iconUrl: "/icons/herb-icon.svg" },
    { id: "4", name: "Mint", category: "Herbs", description: "Aids digestion, relieves nausea, and refreshes the senses", iconUrl: "/icons/herb-icon.svg" },
    { id: "5", name: "Rosemary", category: "Shrubs", description: "Enhances memory, circulation, and supports brain function", iconUrl: "/icons/herb-icon.svg" },
    { id: "6", name: "Thyme", category: "Herbs", description: "Known for antimicrobial properties and respiratory support", iconUrl: "/icons/herb-icon.svg" },
    { id: "7", name: "Cilantro", category: "Herbs", description: "Supports detoxification and helps regulate blood sugar levels", iconUrl: "/icons/herb-icon.svg" },
    { id: "8", name: "Oregano", category: "Herbs", description: "Powerful antioxidant and antimicrobial, aids digestion and immunity", iconUrl: "/icons/herb-icon.svg" },
    { id: "9", name: "Dill", category: "Herbs", description: "Soothes digestive issues, reduces bloating, and freshens breath", iconUrl: "/icons/herb-icon.svg" },
    { id: "10", name: "Chives", category: "Herbs", description: "Mild onion flavor, supports heart health and bone strength", iconUrl: "/icons/herb-icon.svg" },
    { id: "11", name: "Chamomile", category: "Herbs", description: "Calms nerves, aids sleep, and soothes digestive discomfort", iconUrl: "/icons/herb-icon.svg" },
    { id: "12", name: "Lavender", category: "Shrubs", description: "Promotes relaxation, relieves anxiety, and eases headaches", iconUrl: "/icons/herb-icon.svg" },
    { id: "13", name: "Lemon Balm", category: "Herbs", description: "Reduces stress and anxiety, supports mood and sleep quality", iconUrl: "/icons/herb-icon.svg" },
    { id: "14", name: "Peppermint", category: "Herbs", description: "Relieves IBS symptoms, headaches, and improves focus", iconUrl: "/icons/herb-icon.svg" },
    { id: "15", name: "Fennel", category: "Herbs", description: "Eases bloating, supports digestion, and freshens breath", iconUrl: "/icons/herb-icon.svg" },
    { id: "16", name: "Tarragon", category: "Herbs", description: "Stimulates appetite, aids digestion, and offers mild calming effects", iconUrl: "/icons/herb-icon.svg" },
    { id: "17", name: "Marjoram", category: "Herbs", description: "Supports respiratory health and relieves muscle tension", iconUrl: "/icons/herb-icon.svg" },
    { id: "18", name: "Savory", category: "Herbs", description: "Improves digestion and has antimicrobial properties", iconUrl: "/icons/herb-icon.svg" },
    { id: "19", name: "Chervil", category: "Herbs", description: "Mild flavor, supports kidney function and reduces swelling", iconUrl: "/icons/herb-icon.svg" },
    { id: "20", name: "Borage", category: "Herbs", description: "Uplifts mood, reduces inflammation, and supports adrenal health", iconUrl: "/icons/herb-icon.svg" },
    { id: "21", name: "Catnip", category: "Herbs", description: "Calms nerves, eases cramps, and aids digestive upset", iconUrl: "/icons/herb-icon.svg" },
    { id: "22", name: "Echinacea", category: "Herbs", description: "Boosts immune system and helps fight colds and infections", iconUrl: "/icons/herb-icon.svg" },
    { id: "23", name: "Feverfew", category: "Herbs", description: "Reduces migraine frequency and eases inflammation", iconUrl: "/icons/herb-icon.svg" },
    { id: "24", name: "Yarrow", category: "Herbs", description: "Supports wound healing, reduces fever, and aids circulation", iconUrl: "/icons/herb-icon.svg" },
    { id: "25", name: "Calendula", category: "Herbs", description: "Soothes skin irritations, promotes healing, and reduces inflammation", iconUrl: "/icons/herb-icon.svg" },
    { id: "26", name: "Lemon Verbena", category: "Shrubs", description: "Calms digestion, reduces stress, and adds refreshing citrus flavor", iconUrl: "/icons/herb-icon.svg" },
    { id: "27", name: "Hyssop", category: "Herbs", description: "Supports respiratory health and eases coughs and congestion", iconUrl: "/icons/herb-icon.svg" },
    { id: "28", name: "Anise Hyssop", category: "Herbs", description: "Soothes colds, improves digestion, and has a sweet licorice aroma", iconUrl: "/icons/herb-icon.svg" },
    { id: "29", name: "Lovage", category: "Herbs", description: "Aids digestion, acts as a diuretic, and adds celery-like flavor", iconUrl: "/icons/herb-icon.svg" },
    { id: "30", name: "Angelica", category: "Herbs", description: "Supports digestion, relieves coughs, and warms the body", iconUrl: "/icons/herb-icon.svg" },
    { id: "31", name: "Coriander", category: "Herbs", description: "Supports detoxification and aids blood sugar balance", iconUrl: "/icons/herb-icon.svg" },
    { id: "32", name: "Holy Basil", category: "Herbs", description: "Adaptogen that reduces stress and boosts immunity", iconUrl: "/icons/herb-icon.svg" },
    { id: "33", name: "Stevia", category: "Herbs", description: "Natural zero-calorie sweetener, supports blood sugar regulation", iconUrl: "/icons/herb-icon.svg" },
    { id: "34", name: "Lemon Grass", category: "Grasses", description: "Aids digestion, relieves anxiety, and adds citrus aroma", iconUrl: "/icons/herb-icon.svg" },
    { id: "35", name: "Sorrel", category: "Herbs", description: "Tangy lemon flavor, supports digestion and vitamin C intake", iconUrl: "/icons/herb-icon.svg" },
    { id: "36", name: "Salad Burnet", category: "Herbs", description: "Cucumber-like taste, aids digestion and skin health", iconUrl: "/icons/herb-icon.svg" },
    { id: "37", name: "Nasturtium", category: "Climbers", description: "Peppery flavor, supports immune function and wound healing", iconUrl: "/icons/herb-icon.svg" },
    { id: "38", name: "Purslane", category: "Creepers", description: "Rich in omega-3s, supports heart health and hydration", iconUrl: "/icons/herb-icon.svg" },
    { id: "39", name: "Watercress", category: "Herbs", description: "Nutrient-dense, supports detoxification and antioxidant activity", iconUrl: "/icons/herb-icon.svg" },
    { id: "40", name: "Arugula", category: "Herbs", description: "Peppery bite, promotes bone health and eye function", iconUrl: "/icons/herb-icon.svg" },
    // ... (continuing with varied random categories)
    { id: "41", name: "Garlic Chives", category: "Herbs", description: "Mild garlic flavor, supports cardiovascular and immune health", iconUrl: "/icons/herb-icon.svg" },
    { id: "42", name: "Winter Savory", category: "Herbs", description: "Peppery and warming, aids digestion and respiratory comfort", iconUrl: "/icons/herb-icon.svg" },
    { id: "43", name: "Summer Savory", category: "Herbs", description: "Bean-friendly flavor, supports digestion and has antimicrobial effects", iconUrl: "/icons/herb-icon.svg" },
    { id: "44", name: "Sweet Cicely", category: "Herbs", description: "Anise-like sweetness, aids digestion and reduces flatulence", iconUrl: "/icons/herb-icon.svg" },
    { id: "45", name: "Bay Leaf", category: "Trees", description: "Aromatic in soups, supports digestion and respiratory health", iconUrl: "/icons/herb-icon.svg" },
    { id: "46", name: "Nettle", category: "Herbs", description: "Nutrient-rich, supports joint health and allergies", iconUrl: "/icons/herb-icon.svg" },
    { id: "47", name: "Dandelion", category: "Herbs", description: "Supports liver function, digestion, and acts as a diuretic", iconUrl: "/icons/herb-icon.svg" },
    { id: "48", name: "Plantain", category: "Herbs", description: "Soothes skin irritations, wounds, and insect bites", iconUrl: "/icons/herb-icon.svg" },
    { id: "49", name: "Comfrey", category: "Herbs", description: "Promotes tissue repair and wound healing (external use)", iconUrl: "/icons/herb-icon.svg" },
    { id: "50", name: "Valerian", category: "Herbs", description: "Promotes relaxation and supports restful sleep", iconUrl: "/icons/herb-icon.svg" },
    // ... skipping to show variety ...
    { id: "100", name: "Witch Hazel", category: "Shrubs", description: "Astringent for skin toning and irritation relief", iconUrl: "/icons/herb-icon.svg" },
    { id: "101", name: "Basil Thai", category: "Herbs", description: "Spicy anise flavor, aids digestion and immunity", iconUrl: "/icons/herb-icon.svg" },
    { id: "120", name: "Calendula Orange", category: "Herbs", description: "Bright blooms, skin healing and soothing", iconUrl: "/icons/herb-icon.svg" },
    { id: "130", name: "Rosemary Upright", category: "Shrubs", description: "Classic upright, memory and antioxidant", iconUrl: "/icons/herb-icon.svg" },
    { id: "150", name: "Oregano Hot & Spicy", category: "Herbs", description: "Bold heat, powerful antimicrobial", iconUrl: "/icons/herb-icon.svg" },
    { id: "170", name: "Lavender Phenomenal", category: "Shrubs", description: "Hardy variety, strong calming", iconUrl: "/icons/herb-icon.svg" },
    { id: "180", name: "Basil Mrs Burns Lemon", category: "Herbs", description: "Strong lemon, uplifting flavor", iconUrl: "/icons/herb-icon.svg" },
    { id: "190", name: "Thyme Doone Valley", category: "Creepers", description: "Golden variegated, aromatic", iconUrl: "/icons/herb-icon.svg" },
    { id: "199", name: "Lemon Balm Mandarina", category: "Herbs", description: "Orange scent, refreshing calm", iconUrl: "/icons/herb-icon.svg" },
    { id: "200", name: "Stevia", category: "Herbs", description: "Natural zero-calorie sweetener, supports blood sugar regulation", iconUrl: "/icons/herb-icon.svg" },
  ];