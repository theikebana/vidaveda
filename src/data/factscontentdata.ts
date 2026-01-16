export interface FactsContentData {
    combinesWith: string[];
    taste: string[];
    nature: string[];
    partsUsed: string[];
    sideEffects: string[];
  }
  
  export const factsContentData: FactsContentData = {
    combinesWith: [
      "Ashwagandha",
      "Brahmi",
      "Shatavari",
      "Tulsi",
      "Licorice",
      "Ginger",
      "Turmeric",
      "Amla",
    ],
  
    taste: [
      "Bitter",
      "Astringent",
      "Pungent",
    ],
  
    nature: [
      "Warm",
      "Dry",
    ],
  
    partsUsed: [
      "Leaves",
      "Flowers",
      "Essential Oil",
    ],
  
    sideEffects: [
      "Not recommended during pregnancy",
      "Avoid excessive dosage",
      "May lower blood sugar levels",
      "Use cautiously in epilepsy",
      "Can cause dryness if overused",
    ],
  };
  