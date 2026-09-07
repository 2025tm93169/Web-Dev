public class CalculatorTest {

    public static void main(String[] args) {

        Calculator calculator = new Calculator();

        // Test Addition
        int addition = calculator.add(10, 5);
        System.out.println("Addition Test: " + (addition == 15));

        // Test Subtraction
        int subtraction = calculator.subtract(10, 5);
        System.out.println("Subtraction Test: " + (subtraction == 5));

        // Test Multiplication
        int multiplication = calculator.multiply(10, 5);
        System.out.println("Multiplication Test: " + (multiplication == 50));

        // Test Division
        double division = calculator.divide(10, 5);
        System.out.println("Division Test: " + (division == 2.0));

        // Test Division by Zero
        try {
            calculator.divide(10, 0);
            System.out.println("Division by Zero Test: false");
        } catch (IllegalArgumentException e) {
            System.out.println("Division by Zero Test: true");
        }

        System.out.println("All tests completed!");
    }
}