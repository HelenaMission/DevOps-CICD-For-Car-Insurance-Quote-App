import { finalQuote } from "../../src/services/finalQuote";
import { describe, it } from "mocha";
import { expect } from "chai";

describe("finalQuote function", () => {
  it('should return the correct value for value "6641" and riskRate "5" ', () => {
    const input = { value: 6614, rate: 5 };
    const output = { yearly: "330.70", monthly: "27.56" };

    expect(finalQuote(input)).to.deep.equal(output);
  });

  it('should return the correct value for value "6200" and riskRate "5" ', () => {
    const input = { value: 6200, rate: 5 };
    const output = { yearly: "310.00", monthly: "25.83" };

    expect(finalQuote(input)).to.deep.equal(output);
  });

  it("should return an error message for zero riskRate value input", () => {
    const input = { value: 0, rate: 5 };
    const errorMessage = "Invalid input. Please provide a valid car value and risk rate.";

    expect(finalQuote(input)).to.deep.equal(errorMessage);
  });

  it("should return an error message for zero riskRate value input", () => {
    const input = { value: 6614, rate: 0 };
    const errorMessage = "Invalid input. Please provide a valid car value and risk rate.";

    expect(finalQuote(input)).to.deep.equal(errorMessage);
  });

  it("should return an error message for invalid value input", () => {
    const input = { value: -6614, rate: 5 };
    const errorMessage = "Invalid input. Please provide a valid car value and risk rate.";

    expect(finalQuote(input)).to.deep.equal(errorMessage);
  });

  it("should return an error message for invalid riskRate input", () => {
    const input = { value: 6614, rate: -5 };
    const errorMessage = "Invalid input. Please provide a valid car value and risk rate.";

    expect(finalQuote(input)).to.deep.equal(errorMessage);
  });
});

export default describe;
