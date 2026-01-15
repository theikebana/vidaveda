export type ConsultationStatus = "Completed" | "Upcoming" | "Cancelled";

export interface Consultation {
  id: number;
  title: string;
  date: string;
  status: ConsultationStatus;
  isPaid: boolean;
  type: "history" | "upcoming";
}

const doctorNames = [
  "Dr. John Doe", "Dr. Jane Smith", "Dr. Alex Lee", "Dr. Mary Brown",
  "Dr. Sarah Wilson", "Dr. Robert Chen", "Dr. Emily Taylor", "Dr. Michael Ng",
  "Dr. Sophia Martinez", "Dr. David Park", "Dr. Linda Johnson", "Dr. Chris Evans"
];

const concerns = [
  "Anxiety", "Digestive Health", "Skin Wellness", "Chronic Pain",
  "Sleep Optimization", "Hormonal Balance", "General Wellness",
  "Immune Support", "Stress Management", "Joint Mobility"
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

export const consultationsData: Consultation[] = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  // Create a mix: 35 History items, 15 Upcoming items
  const isHistory = i < 35; 
  
  const randomDoctor = doctorNames[Math.floor(Math.random() * doctorNames.length)];
  const randomConcern = concerns[Math.floor(Math.random() * concerns.length)];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDay = Math.floor(Math.random() * 28) + 1;

  // Status logic based on type
  let status: ConsultationStatus;
  if (isHistory) {
    status = Math.random() > 0.15 ? "Completed" : "Cancelled";
  } else {
    status = "Upcoming";
  }

  return {
    id,
    title: `Consultation for - ${randomConcern} with ${randomDoctor}`,
    date: `${randomDay}, ${randomMonth}, ${isHistory ? "2025" : "2026"}`,
    status,
    isPaid: Math.random() > 0.1, // 90% chance of being paid
    type: isHistory ? "history" : "upcoming",
  };
});