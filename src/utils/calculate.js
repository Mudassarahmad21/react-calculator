export const calculate = (expression) => {
  try {
    const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);
    if (!tokens) return "";

    const values = [];
    const ops = [];

    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

    const applyOp = () => {
      const b = values.pop();
      const a = values.pop();
      const op = ops.pop();

      switch (op) {
        case "+":
          values.push(a + b);
          break;
        case "-":
          values.push(a - b);
          break;
        case "*":
          values.push(a * b);
          break;
        case "/":
          values.push(b === 0 ? "Error" : a / b);
          break;
        default:
          break;
      }
    };

    tokens.forEach((token) => {
      if (!isNaN(token)) {
        values.push(Number(token));
      } else {
        while (
          ops.length &&
          precedence[ops[ops.length - 1]] >= precedence[token]
        ) {
          applyOp();
        }
        ops.push(token);
      }
    });

    while (ops.length) applyOp();
    return values[0]?.toString() ?? "";
  } catch {
    return "Error";
  }
};
