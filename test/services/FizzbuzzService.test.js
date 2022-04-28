const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit testing for FizzbuzzService class", () => {

    test("Caso en que se muestra el score", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(result.trick).toBe(1);
    }); 
    test("Caso en que trick es FIZZ", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(result.trick).toBe("FIZZ");
    }); 
    test("Caso en que trick es BUZZ", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);

        expect(result.trick).toBe("BUZZ");
    }); 
    test("Caso en que trick es FIZZBUZZ", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const result = FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(result.trick).toBe("FIZZBUZZ");
    }); 

    test("Prueba de applyValidationInNumber", () => {
        let score = 3
        expect(FizzbuzzService.applyValidationInNumber(score)).toBe("FIZZ")
        score = 5
        expect(FizzbuzzService.applyValidationInNumber(score)).toBe("BUZZ")
        score = 15
        expect(FizzbuzzService.applyValidationInNumber(score)).toBe("FIZZBUZZ")
        score = 11
        expect(FizzbuzzService.applyValidationInNumber(score)).toBe(11)
    })
});