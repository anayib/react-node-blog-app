import axios from "axios";
jest.mock("axios");
let articles = null;

const fetchTutorials = async () => {
  try {
    const content = await axios.get("/api/tutorials");
    console.log(content.data);
    return content.data ? content.data : undefined;
  } catch (error) {
    console.log(error);
  }
};

articles = [
  {
    id: "introduccion-a-node-js",
    title: "Introducción a Node JS",
    tags: ["Node", "JavaScript"],
    metaDescription: "Node, aprender node JS para directores de producto",
  },
  {
    id: "introduccion-a-react-js",
    title: "Introducción a React JS",
    tags: ["React", "JavaScript"],
    metaDescription: "React, aprender react para directores de producto",
  },
];

const mockResponse = { data: articles };
axios.get.mockResolvedValue(mockResponse);

test("Get Articles From API", async () => {
  const result = await fetchTutorials();
  console.log(result);
  await expect(result).toBeDefined();
  await expect(result.length).toBeGreaterThan(0);
});
