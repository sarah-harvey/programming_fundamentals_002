const catalogueService = require("../app/catalogue_service");

describe("catalogueService.checkBook", () => {
    test("returns true when a book is found by title", () => {
      expect(catalogueService.checkBook("Great Expectations")).toBe(true);
    });

    test("returns false when a book cannot be found by title", () => {
      expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
    });

    test("returns true when a partial match is found", () => {
      expect(catalogueService.checkBook("Expectations")).toBe(true);
    });
    
    test("returns false when not even a partial match is found", () => {
      expect(catalogueService.checkBook("The Wind")).toBe(false);
    });
  });

describe("catalogueService.countBooksByKeyword", () => {
    test("returns number of books containing keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
});
});
describe("catalogueService.getBooksByAuthor", () => {
  test("returns list of books by author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual(["A Tale of Two Cities", "Oliver Twist", "Great Expectations"]);
  });
});

describe("catalogueService.getStockCount", () => {
  test("return number of items in stock of a given title", () => {
    expect(catalogueService.getStockCount("Between the Assassinations")).toBe(9);
  });

  test("returns 0 when stock count it 0 or book title not listed", () => {
    expect(catalogueService.getStockCount("The Great Gatsby")).toBe(0);
  });
});

describe.only("catalogueService.stockReview", () => {
  test("returns 'Not in Stock' when quantity is 0", () => {
    expect(catalogueService.stockReview("Dracula")).toEqual(["Not in Stock"]);
  });
  test("returns 'Low Stock' when quantity of title is >1 but <=5", () => {
    expect(catalogueService.stockReview("A Tale of Two Cities")).toEqual(["Low Stock"]);
  });
  test("returns 'Medium Stock' when quantity of title is >=6 but <=10", () => {
    expect(catalogueService.stockReview("Between the Assassinations")).toEqual(["Medium Stock"]);
  });
  test("returns 'High Stock' when quantity is >=11", () => {
    expect(catalogueService.stockReview("The Origin of Species")).toEqual(["High Stock"]);
  });
  //Not sure if the stock review outcomes should be 'toEqual' or 'toBe' or even 'toThrow' so I'm assuming they are classed as complex data types because it's returning a statement not just a number?
});