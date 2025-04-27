export const mockData = [
  {
    id: 1,
    name: "TechCorp",
    email: "contact@techcorp.com",
    ownerID: 1, // Assuming owner exists in the admin table
    owner: {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@techcorp.com",
    },
    team: [
      { id: 1, name: "Development" },
      { id: 2, name: "Marketing" },
    ],
    employee: [
      { id: 1, name: "Alice", position: "Developer" },
      { id: 2, name: "Bob", position: "Marketing Lead" },
    ],
  },
  {
    id: 2,
    name: "GreenTech",
    email: "contact@greentech.com",
    ownerID: 2, // Assuming owner exists in the admin table
    owner: {
      id: 2,
      first_name: "Sarah",
      last_name: "Green",
      email: "sarah.green@greentech.com",
    },
    team: [
      { id: 1, name: "R&D" },
      { id: 2, name: "Sales" },
    ],
    employee: [
      { id: 3, name: "Tom", position: "Scientist" },
      { id: 4, name: "Jerry", position: "Sales Executive" },
    ],
  },
  {
    id: 3,
    name: "DesignWorks",
    email: "contact@designworks.com",
    ownerID: 3, // Assuming owner exists in the admin table
    owner: {
      id: 3,
      first_name: "Emily",
      last_name: "Stone",
      email: "emily.stone@designworks.com",
    },
    team: [
      { id: 1, name: "Design" },
      { id: 2, name: "Customer Service" },
    ],
    employee: [
      { id: 5, name: "Liam", position: "Lead Designer" },
      { id: 6, name: "Noah", position: "Customer Service Rep" },
    ],
  },
];
