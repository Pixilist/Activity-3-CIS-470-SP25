const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions - See readme for more details', () => {
  // Existing test cases
  test('should classify an Equilateral triangle', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('should return error for invalid inputs', () => {
    expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('should return "Not a Triangle" for invalid triangle sides', () => {
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });

  // New test cases

  // Robust Boundary Value Test Cases (BVT)
  test('BVT: Minimum valid input', () => {
    expect(classifyTriangle(1, 1, 1)).toBe('Equilateral');
  });

  test('BVT: Maximum valid input', () => {
    expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');
  });

  test('BVT: Just below minimum input', () => {
    expect(classifyTriangle(0, 1, 1)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('BVT: Just above maximum input', () => {
    expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  // Weak Normal Equivalence Class Testing (ECP)
  test('ECP: Valid Scalene triangle', () => {
    expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
  });

  test('ECP: Valid Isosceles triangle', () => {
    expect(classifyTriangle(5, 5, 7)).toBe('Isosceles');
  });

  test('ECP: Invalid triangle (sum of two sides equal to third side)', () => {
    expect(classifyTriangle(3, 4, 7)).toBe('Not a Triangle');
  });

  test('ECP: Invalid input (negative number)', () => {
    expect(classifyTriangle(-1, 4, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('ECP: Invalid input (non-integer)', () => {
    expect(classifyTriangle(3.5, 4, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  // Additional test cases
  test('BVT: Minimum valid Isosceles triangle', () => {
    expect(classifyTriangle(2, 2, 1)).toBe('Isosceles');
  });

  test('BVT: Maximum valid Isosceles triangle', () => {
    expect(classifyTriangle(200, 200, 199)).toBe('Isosceles');
  });

  test('ECP: Valid Scalene triangle (all sides different)', () => {
    expect(classifyTriangle(5, 7, 9)).toBe('Scalene');
  });

  test('BVT: Just below valid triangle inequality', () => {
    expect(classifyTriangle(2, 3, 4)).toBe('Scalene');
  });

  test('BVT: Just above invalid triangle inequality', () => {
    expect(classifyTriangle(2, 3, 5)).toBe('Not a Triangle');
  });

  test('ECP: Invalid input (one side zero)', () => {
    expect(classifyTriangle(0, 5, 5)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('ECP: Invalid input (all sides zero)', () => {
    expect(classifyTriangle(0, 0, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('BVT: Maximum valid Scalene triangle', () => {
    expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
  });

  test('ECP: Invalid triangle (sum of two sides less than third side)', () => {
    expect(classifyTriangle(2, 3, 6)).toBe('Not a Triangle');
  });

  test('BVT: Just within valid range for all sides', () => {
    expect(classifyTriangle(2, 2, 2)).toBe('Equilateral');
  });
});