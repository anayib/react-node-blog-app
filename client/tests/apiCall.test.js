import axios from "axios";
jest.mock("axios");
import articles from "./dummyTestData";

const fetchArticles = async () => {
  try {
    const content = await axios.get("/api/articles");
    return content.data ? content.data : undefined;
  } catch (error) {}
};

const mockResponse = { data: articles };
axios.get.mockResolvedValue(mockResponse);

describe("Api tests", () => {
  it("Get Articles From API", async () => {
    const result = await fetchArticles();
    await expect(result).toBeDefined();
    await expect(result.length).toBeGreaterThan(0);
  });
});
