import { hands } from "../rockpaperscissors";
import { gitHand } from "../rockpaperscissors";
import {jest} from '@jest/globals';
describe("Do the thing", () => {
    test("Check the length of notes", () => {
        expect(hands).toHaveLength(3);
    });
    test("Check the id number", () => {
        expect(hands[2]).toBe("scissors");
    });
    test("To be truthy", () => {
        let newHand = gitHand();
        expect(newHand).toBeTruthy();
    })
    test("return a number", () => {
        let newHand2 = jest.fn(() => true)
        newHand2();
        expect(newHand2).toHaveReturned();
    })
    test("scissors do be in the hand", () => {
        let Scissor = jest.fn();
        gitHand(Scissor, 'scissors')
        expect(Scissor).not.toHaveBeenCalled()
    })
})
