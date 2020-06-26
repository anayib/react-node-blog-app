import axios from "axios";
jest.mock("axios");
import articles from "./dummyTestData";

const fetchTutorials = async () => {
  try {
    const content = await axios.get("/api/tutorials");
    return content.data ? content.data : undefined;
  } catch (error) {}
};

const mockResponse = { data: articles };
axios.get.mockResolvedValue(mockResponse);

describe("Api tests", () => {
  it("Get Articles From API", async () => {
    const result = await fetchTutorials();
    await expect(result).toBeDefined();
    await expect(result.length).toBeGreaterThan(0);
  });
});
