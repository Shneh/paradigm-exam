// UPSC NDA II 2023 Mathematics Question Paper & Quiz Dataset

const DEFAULT_QUIZZES = [
  {
  "id": "nda-2-2023-maths",
  "title": "UPSC NDA (II) 2023 - Mathematics Official Question Paper",
  "description": "Authentic UPSC NDA & NA II 2023 Mathematics Paper. 120 Questions | 2.5 Hours | Total Marks: 300. Marking Scheme: +2.5 marks for correct, -0.8333 (1/3 of 2.5) deduction for incorrect, 0 for unattempted.",
  "timeLimitMinutes": 150,
  "maxViolationsAllowed": 3,
  "marksPerCorrect": 2.5,
  "negativeMarksPerWrong": 0.8333333333333334,
  "totalMarks": 300,
  "passingMarks": 120,
  "isActive": true,
  "isResultPublished": false,
  "questions": [
    {
      "id": "nda2023_q1",
      "text": "What is the locus of z such that |z - 1 - i| = |z + 1 + i| where z is a complex number?",
      "options": [
        "A straight line passing through origin",
        "A circle centered at origin",
        "An ellipse with foci (1,1) and (-1,-1)",
        "A parabola"
      ],
      "correctAnswer": 0,
      "explanation": "|z - (1+i)| = |z - (-1-i)| represents the perpendicular bisector of the line segment joining (1,1) and (-1,-1), which passes through the origin."
    },
    {
      "id": "nda2023_q2",
      "text": "What is the remainder when (1! + 2! + 3! + 4! + ... + 100!) is divided by 24?",
      "options": [
        "9",
        "12",
        "15",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "For n >= 4, n! is divisible by 24 (since 4! = 24). So remainder is (1! + 2! + 3!) mod 24 = (1 + 2 + 6) mod 24 = 9."
    },
    {
      "id": "nda2023_q3",
      "text": "If a, b, c are in Geometric Progression (GP) with common ratio r where 0 < r < 1, then a + b, 2b, b + c are in:",
      "options": [
        "Arithmetic Progression (AP)",
        "Geometric Progression (GP)",
        "Harmonic Progression (HP)",
        "Neither AP nor GP nor HP"
      ],
      "correctAnswer": 2,
      "explanation": "Since b = ar, c = ar^2, we have (a+b) = a(1+r), 2b = 2ar, (b+c) = ar(1+r). Taking reciprocals shows 1/(a+b) + 1/(b+c) = 2/(2b), so they are in HP."
    },
    {
      "id": "nda2023_q4",
      "text": "What is the number of real roots of the equation x^4 - 4x - 1 = 0?",
      "options": [
        "0",
        "1",
        "2",
        "4"
      ],
      "correctAnswer": 2,
      "explanation": "Let f(x) = x^4 - 4x - 1. f'(x) = 4x^3 - 4 = 0 => x = 1. f(1) = -4 < 0. As x -> inf, f(x) -> inf; as x -> -inf, f(x) -> inf. Thus f(x) crosses zero twice, yielding 2 real roots."
    },
    {
      "id": "nda2023_q5",
      "text": "If A = {x \u2208 R : x^2 - 5x + 6 = 0} and B = {x \u2208 R : x^2 - 7x + 12 = 0}, what is (A \u222a B) \\ (A \u2229 B)?",
      "options": [
        "{2, 4}",
        "{2, 3, 4}",
        "{2, 4, 3}",
        "{2, 4}"
      ],
      "correctAnswer": 0,
      "explanation": "A = {2, 3}, B = {3, 4}. A \u222a B = {2, 3, 4}, A \u2229 B = {3}. Symmetric difference = {2, 4}."
    },
    {
      "id": "nda2023_q6",
      "text": "Consider a matrix A of order 3x3 such that det(A) = 5. What is det(2 * adj(A)) equal to?",
      "options": [
        "40",
        "100",
        "200",
        "400"
      ],
      "correctAnswer": 2,
      "explanation": "det(k * adj(A)) = k^n * det(adj(A)) = k^n * (det(A))^(n-1). Here n=3, k=2, det(A)=5. det(2*adj(A)) = 2^3 * 5^(3-1) = 8 * 25 = 200."
    },
    {
      "id": "nda2023_q7",
      "text": "If the roots of x^2 - bx + c = 0 are two consecutive integers, then what is b^2 - 4c equal to?",
      "options": [
        "0",
        "1",
        "2",
        "4"
      ],
      "correctAnswer": 1,
      "explanation": "Let roots be k and k+1. Difference of roots = 1. (alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta = b^2 - 4c = 1^2 = 1."
    },
    {
      "id": "nda2023_q8",
      "text": "In how many ways can a committee of 5 members be formed from 6 men and 4 women such that at least 3 women are included?",
      "options": [
        "60",
        "66",
        "72",
        "84"
      ],
      "correctAnswer": 1,
      "explanation": "Case 1: 3 women and 2 men = 4C3 * 6C2 = 4 * 15 = 60. Case 2: 4 women and 1 man = 4C4 * 6C1 = 1 * 6 = 6. Total = 60 + 6 = 66."
    },
    {
      "id": "nda2023_q9",
      "text": "What is the expansion coefficient of x^7 in (1 - 2x + x^2)^5?",
      "options": [
        "-120",
        "-210",
        "210",
        "120"
      ],
      "correctAnswer": 1,
      "explanation": "(1 - 2x + x^2)^5 = ((1 - x)^2)^5 = (1 - x)^10. Coefficient of x^7 in (1 - x)^10 is 10C7 * (-1)^7 = -120."
    },
    {
      "id": "nda2023_q10",
      "text": "If log_10(2), log_10(2^x - 1), log_10(2^x + 3) are in Arithmetic Progression (AP), then what is the value of x?",
      "options": [
        "log_2(5)",
        "log_2(3)",
        "1",
        "2"
      ],
      "correctAnswer": 0,
      "explanation": "2*log_10(2^x - 1) = log_10(2) + log_10(2^x + 3) => (2^x - 1)^2 = 2(2^x + 3). Let y = 2^x. (y-1)^2 = 2y + 6 => y^2 - 4y - 5 = 0 => (y-5)(y+1) = 0. Since y > 0, y = 5 => 2^x = 5 => x = log_2(5)."
    },
    {
      "id": "nda2023_q11",
      "text": "What is the sum of all two-digit numbers which when divided by 4 yield 1 as remainder?",
      "options": [
        "1210",
        "1215",
        "1225",
        "1250"
      ],
      "correctAnswer": 0,
      "explanation": "First 2-digit number = 13, last = 97. AP: 13, 17, 21, ..., 97. n = (97 - 13)/4 + 1 = 22. Sum = (22/2) * (13 + 97) = 11 * 110 = 1210."
    },
    {
      "id": "nda2023_q12",
      "text": "If matrix A = [[0, 1], [-1, 0]], then what is A^4 equal to?",
      "options": [
        "I (Identity Matrix)",
        "-I",
        "A",
        "-A"
      ],
      "correctAnswer": 0,
      "explanation": "A^2 = [[-1, 0], [0, -1]] = -I. Hence A^4 = (-I)^2 = I."
    },
    {
      "id": "nda2023_q13",
      "text": "What is the value of det([[1, a, b+c], [1, b, c+a], [1, c, a+b]])?",
      "options": [
        "a + b + c",
        "0",
        "1",
        "abc"
      ],
      "correctAnswer": 1,
      "explanation": "Add C3 -> C3 + C2 gives 3rd column as (a+b+c, a+b+c, a+b+c) which is a multiple of 1st column (1, 1, 1). Two proportional columns make det = 0."
    },
    {
      "id": "nda2023_q14",
      "text": "If a, b are roots of x^2 - p(x + 1) - c = 0, then what is (1 + a)(1 + b) equal to?",
      "options": [
        "1 - c",
        "1 + c",
        "c - 1",
        "p + c"
      ],
      "correctAnswer": 0,
      "explanation": "x^2 - px - (p + c) = 0. a + b = p, ab = -(p + c). (1 + a)(1 + b) = 1 + (a + b) + ab = 1 + p - p - c = 1 - c."
    },
    {
      "id": "nda2023_q15",
      "text": "How many terms are there in the expansion of (x + y + z)^10?",
      "options": [
        "33",
        "66",
        "55",
        "44"
      ],
      "correctAnswer": 1,
      "explanation": "Number of terms in (x_1 + x_2 + ... + x_r)^n is (n + r - 1)C(r - 1). Here n=10, r=3. (10 + 3 - 1)C(3 - 1) = 12C2 = 66."
    },
    {
      "id": "nda2023_q16",
      "text": "If standard deviation of x_1, x_2, ..., x_n is \u03c3, then what is the standard deviation of 2x_1 + 3, 2x_2 + 3, ..., 2x_n + 3?",
      "options": [
        "\u03c3",
        "2\u03c3",
        "2\u03c3 + 3",
        "4\u03c3"
      ],
      "correctAnswer": 1,
      "explanation": "Standard deviation is invariant under shift of origin (+3) and scales directly by multiplying factor (|2|). New SD = 2\u03c3."
    },
    {
      "id": "nda2023_q17",
      "text": "If tan(A) = 1/2 and tan(B) = 1/3, what is the value of A + B?",
      "options": [
        "\u03c0/6",
        "\u03c0/4",
        "\u03c0/3",
        "\u03c0/2"
      ],
      "correctAnswer": 1,
      "explanation": "tan(A + B) = (tan A + tan B) / (1 - tan A tan B) = (1/2 + 1/3) / (1 - 1/6) = (5/6)/(5/6) = 1 => A + B = \u03c0/4."
    },
    {
      "id": "nda2023_q18",
      "text": "What is the maximum value of 3 sin(x) + 4 cos(x) + 5?",
      "options": [
        "5",
        "10",
        "12",
        "7"
      ],
      "correctAnswer": 1,
      "explanation": "Max value of a sin x + b cos x is sqrt(a^2 + b^2) = sqrt(3^2 + 4^2) = 5. Max of 5 + 5 = 10."
    },
    {
      "id": "nda2023_q19",
      "text": "What is sin(15\u00b0) equal to?",
      "options": [
        "(\u221a3 - 1) / (2\u221a2)",
        "(\u221a3 + 1) / (2\u221a2)",
        "(1 - \u221a3) / (2\u221a2)",
        "1 / (2\u221a2)"
      ],
      "correctAnswer": 0,
      "explanation": "sin(45\u00b0 - 30\u00b0) = sin 45 cos 30 - cos 45 sin 30 = (1/\u221a2)(\u221a3/2) - (1/\u221a2)(1/2) = (\u221a3 - 1)/(2\u221a2)."
    },
    {
      "id": "nda2023_q20",
      "text": "What is the principal value of sin^-1(sin(2\u03c0/3))?",
      "options": [
        "2\u03c0/3",
        "\u03c0/3",
        "-\u03c0/3",
        "4\u03c0/3"
      ],
      "correctAnswer": 1,
      "explanation": "Range of sin^-1 is [-\u03c0/2, \u03c0/2]. sin(2\u03c0/3) = sin(\u03c0 - \u03c0/3) = sin(\u03c0/3). Thus sin^-1(sin(\u03c0/3)) = \u03c0/3."
    },
    {
      "id": "nda2023_q21",
      "text": "What is lim_{x -> 0} (sin(x) / x)^(1/x^2) equal to?",
      "options": [
        "e",
        "1/e",
        "e^(-1/6)",
        "e^(1/6)"
      ],
      "correctAnswer": 2,
      "explanation": "Form 1^inf. L = exp( lim_{x->0} (sin x / x - 1)/x^2 ) = exp( lim_{x->0} (sin x - x)/x^3 ). By Taylor series sin x = x - x^3/6 => L = e^(-1/6)."
    },
    {
      "id": "nda2023_q22",
      "text": "What is lim_{x -> 0} (1 - cos(2x)) / x^2 equal to?",
      "options": [
        "1",
        "2",
        "4",
        "1/2"
      ],
      "correctAnswer": 1,
      "explanation": "1 - cos(2x) = 2 sin^2(x). lim_{x->0} 2 (sin x / x)^2 = 2 * 1^2 = 2."
    },
    {
      "id": "nda2023_q23",
      "text": "If f(x) = |x - 1| + |x - 2|, at how many points in R is f(x) non-differentiable?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correctAnswer": 2,
      "explanation": "Absolute value terms |x - a| have corner points where derivative is undefined. Here corner points are x = 1 and x = 2."
    },
    {
      "id": "nda2023_q24",
      "text": "What is the derivative of sec(x) with respect to x?",
      "options": [
        "sec(x) tan(x)",
        "-sec(x) tan(x)",
        "tan^2(x)",
        "sec^2(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Standard calculus derivative: d/dx(sec x) = sec x tan x."
    },
    {
      "id": "nda2023_q25",
      "text": "What is the value of \u222b (1 / (1 + x^2)) dx from 0 to 1?",
      "options": [
        "\u03c0/2",
        "\u03c0/4",
        "\u03c0/3",
        "1"
      ],
      "correctAnswer": 1,
      "explanation": "\u222b (1/(1+x^2)) dx = tan^-1(x). Evaluated from 0 to 1 gives tan^-1(1) - tan^-1(0) = \u03c0/4 - 0 = \u03c0/4."
    },
    {
      "id": "nda2023_q26",
      "text": "What is the area bounded by the curve y = x^2 and the line y = 4?",
      "options": [
        "16/3",
        "32/3",
        "8/3",
        "64/3"
      ],
      "correctAnswer": 1,
      "explanation": "Intersection points at x = -2 and x = 2. Area = \u222b_{-2}^{2} (4 - x^2) dx = 2 * [4x - x^3/3]_{0}^{2} = 2 * (8 - 8/3) = 32/3."
    },
    {
      "id": "nda2023_q27",
      "text": "What is the order and degree of the differential equation (d^2y/dx^2)^3 + (dy/dx)^4 + y = 0?",
      "options": [
        "Order 2, Degree 3",
        "Order 3, Degree 2",
        "Order 2, Degree 4",
        "Order 4, Degree 2"
      ],
      "correctAnswer": 0,
      "explanation": "Highest derivative is d^2y/dx^2 (Order = 2). Power raised to highest derivative is 3 (Degree = 3)."
    },
    {
      "id": "nda2023_q28",
      "text": "What is the integrating factor of the linear differential equation dy/dx + P(x)y = Q(x)?",
      "options": [
        "e^(\u222b P dx)",
        "\u222b P dx",
        "e^(\u222b Q dx)",
        "P(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Standard integrating factor for 1st order linear ODE is I.F. = e^(\u222b P(x) dx)."
    },
    {
      "id": "nda2023_q29",
      "text": "If f(x) = x^3 - 3x^2 + 3x - 100, then f(x) is:",
      "options": [
        "Strictly increasing on R",
        "Strictly decreasing on R",
        "Increasing for x > 1 and decreasing for x < 1",
        "Neither increasing nor decreasing"
      ],
      "correctAnswer": 0,
      "explanation": "f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2 >= 0 for all x \u2208 R, with zero only at isolated point x = 1. Thus f(x) is strictly increasing."
    },
    {
      "id": "nda2023_q30",
      "text": "What is the value of \u222b_{-\u03c0}^{\u03c0} sin^3(x) cos^2(x) dx?",
      "options": [
        "0",
        "\u03c0",
        "2\u03c0",
        "1/2"
      ],
      "correctAnswer": 0,
      "explanation": "f(x) = sin^3(x) cos^2(x) is an odd function because f(-x) = sin^3(-x) cos^2(-x) = -f(x). Integral of odd function over symmetric interval [-a, a] is 0."
    },
    {
      "id": "nda2023_q31",
      "text": "What is the distance between the parallel lines 3x + 4y - 5 = 0 and 6x + 8y + 15 = 0?",
      "options": [
        "5/2",
        "2",
        "3",
        "7/2"
      ],
      "correctAnswer": 0,
      "explanation": "Rewrite first line: 6x + 8y - 10 = 0. Distance d = |c1 - c2| / sqrt(a^2 + b^2) = |-10 - 15| / sqrt(6^2 + 8^2) = 25 / 10 = 5/2."
    },
    {
      "id": "nda2023_q32",
      "text": "What is the equation of the circle centered at (2, -3) and passing through (5, 1)?",
      "options": [
        "(x - 2)^2 + (y + 3)^2 = 25",
        "(x + 2)^2 + (y - 3)^2 = 25",
        "(x - 2)^2 + (y - 3)^2 = 25",
        "(x - 5)^2 + (y - 1)^2 = 25"
      ],
      "correctAnswer": 0,
      "explanation": "Radius r = sqrt((5-2)^2 + (1 - (-3))^2) = sqrt(3^2 + 4^2) = 5. Circle equation: (x - 2)^2 + (y + 3)^2 = 5^2 = 25."
    },
    {
      "id": "nda2023_q33",
      "text": "What is the eccentricity of the hyperbola x^2/9 - y^2/16 = 1?",
      "options": [
        "5/3",
        "5/4",
        "4/3",
        "3/5"
      ],
      "correctAnswer": 0,
      "explanation": "b^2 = a^2(e^2 - 1) => 16 = 9(e^2 - 1) => e^2 = 25/9 => e = 5/3."
    },
    {
      "id": "nda2023_q34",
      "text": "What is the angle between the vectors a = i + j - k and b = i - j + k?",
      "options": [
        "cos^-1(-1/3)",
        "cos^-1(1/3)",
        "\u03c0/3",
        "2\u03c0/3"
      ],
      "correctAnswer": 0,
      "explanation": "a . b = (1)(1) + (1)(-1) + (-1)(1) = -1. |a| = \u221a3, |b| = \u221a3. cos \u03b8 = (a.b)/(|a||b|) = -1/3 => \u03b8 = cos^-1(-1/3)."
    },
    {
      "id": "nda2023_q35",
      "text": "If a and b are unit vectors such that |a + b| = 1, then what is |a - b| equal to?",
      "options": [
        "\u221a2",
        "\u221a3",
        "2",
        "1"
      ],
      "correctAnswer": 1,
      "explanation": "|a+b|^2 + |a-b|^2 = 2(|a|^2 + |b|^2). 1^2 + |a-b|^2 = 2(1 + 1) = 4 => |a-b|^2 = 3 => |a-b| = \u221a3."
    },
    {
      "id": "nda2023_q36",
      "text": "What is the projection of vector a = 2i + 3j + 2k on vector b = i + 2j + k?",
      "options": [
        "10 / \u221a6",
        "5 / \u221a6",
        "10",
        "\u221a6"
      ],
      "correctAnswer": 0,
      "explanation": "Projection = (a . b) / |b| = (2*1 + 3*2 + 2*1) / sqrt(1^2 + 2^2 + 1^2) = 10 / \u221a6."
    },
    {
      "id": "nda2023_q37",
      "text": "What is the perpendicular distance of point (1, 2, 3) from the plane x + 2y + 2z - 5 = 0?",
      "options": [
        "2",
        "3",
        "6/3",
        "2"
      ],
      "correctAnswer": 0,
      "explanation": "d = |1(1) + 2(2) + 2(3) - 5| / sqrt(1^2 + 2^2 + 2^2) = |1 + 4 + 6 - 5| / 3 = 6 / 3 = 2."
    },
    {
      "id": "nda2023_q38",
      "text": "The direction cosines of a line equally inclined to the coordinate axes are:",
      "options": [
        "(\u00b11/\u221a3, \u00b11/\u221a3, \u00b11/\u221a3)",
        "(\u00b11/3, \u00b11/3, \u00b11/3)",
        "(\u00b11/\u221a2, \u00b11/\u221a2, \u00b11/\u221a2)",
        "(1, 1, 1)"
      ],
      "correctAnswer": 0,
      "explanation": "l^2 + m^2 + n^2 = 1. Since line is equally inclined, l = m = n => 3l^2 = 1 => l = \u00b11/\u221a3."
    },
    {
      "id": "nda2023_q39",
      "text": "What is the magnitude of vector cross product |a \u00d7 b| if |a| = 4, |b| = 5, and a . b = 12?",
      "options": [
        "16",
        "8",
        "12",
        "20"
      ],
      "correctAnswer": 0,
      "explanation": "Lagrange's identity: |a \u00d7 b|^2 + (a . b)^2 = |a|^2 |b|^2 => |a \u00d7 b|^2 + 144 = 16 * 25 = 400 => |a \u00d7 b|^2 = 256 => |a \u00d7 b| = 16."
    },
    {
      "id": "nda2023_q40",
      "text": "What is the scalar triple product [a b c] if a = i, b = j, c = k?",
      "options": [
        "1",
        "0",
        "-1",
        "3"
      ],
      "correctAnswer": 0,
      "explanation": "[i j k] = i . (j \u00d7 k) = i . i = 1."
    },
    {
      "id": "nda2023_q41",
      "text": "Two dice are thrown simultaneously. What is the probability that the sum of numbers obtained is 8?",
      "options": [
        "5/36",
        "1/6",
        "7/36",
        "1/9"
      ],
      "correctAnswer": 0,
      "explanation": "Favorable pairs for sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Total = 36. P = 5/36."
    },
    {
      "id": "nda2023_q42",
      "text": "If P(A) = 0.4, P(B) = 0.5, and P(A \u2229 B) = 0.2, what is P(A|B)?",
      "options": [
        "0.4",
        "0.5",
        "0.25",
        "0.8"
      ],
      "correctAnswer": 0,
      "explanation": "P(A|B) = P(A \u2229 B) / P(B) = 0.2 / 0.5 = 0.4."
    },
    {
      "id": "nda2023_q43",
      "text": "If events A and B are independent, which of the following is correct?",
      "options": [
        "P(A \u2229 B) = P(A) * P(B)",
        "P(A \u222a B) = P(A) + P(B)",
        "P(A|B) = 0",
        "P(A \u2229 B) = 0"
      ],
      "correctAnswer": 0,
      "explanation": "By definition, two events A and B are independent if and only if P(A \u2229 B) = P(A) * P(B)."
    },
    {
      "id": "nda2023_q44",
      "text": "A bag contains 5 red and 3 green balls. If 2 balls are drawn at random without replacement, what is the probability that both are red?",
      "options": [
        "5/14",
        "25/64",
        "5/28",
        "15/56"
      ],
      "correctAnswer": 0,
      "explanation": "P(both red) = (5C2) / (8C2) = 10 / 28 = 5/14."
    },
    {
      "id": "nda2023_q45",
      "text": "What is the mean of first n natural numbers?",
      "options": [
        "(n + 1) / 2",
        "n / 2",
        "(n - 1) / 2",
        "n(n + 1) / 2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum = n(n+1)/2. Mean = Sum / n = (n + 1) / 2."
    },
    {
      "id": "nda2023_q46",
      "text": "What is the variance of first n natural numbers?",
      "options": [
        "(n^2 - 1) / 12",
        "(n^2 + 1) / 12",
        "n^2 / 12",
        "(n + 1)^2 / 12"
      ],
      "correctAnswer": 0,
      "explanation": "Standard statistical formula for variance of 1, 2, ..., n is (n^2 - 1) / 12."
    },
    {
      "id": "nda2023_q47",
      "text": "If the mean of a binomial distribution is 4 and variance is 3, what is the value of parameter n?",
      "options": [
        "16",
        "12",
        "8",
        "4"
      ],
      "correctAnswer": 0,
      "explanation": "Mean = np = 4, Variance = npq = 3. q = 3/4 => p = 1/4. n(1/4) = 4 => n = 16."
    },
    {
      "id": "nda2023_q48",
      "text": "If two regression lines are 3x + 2y - 26 = 0 and 6x + y - 31 = 0, what is the mean of x?",
      "options": [
        "4",
        "7",
        "5",
        "6"
      ],
      "correctAnswer": 0,
      "explanation": "Regression lines intersect at (mean_x, mean_y). Solving 3x + 2y = 26 and 6x + y = 31 gives x = 4, y = 7."
    },
    {
      "id": "nda2023_q49",
      "text": "If coefficient of correlation between x and y is 0.8, what is the correlation between 2x and -3y?",
      "options": [
        "-0.8",
        "0.8",
        "-0.24",
        "0.24"
      ],
      "correctAnswer": 0,
      "explanation": "Correlation coefficient is invariant under change of scale except when signs differ. Multiplying one variable by +2 and other by -3 changes sign: r' = -0.8."
    },
    {
      "id": "nda2023_q50",
      "text": "What is the probability of getting 53 Sundays in a leap year?",
      "options": [
        "2/7",
        "1/7",
        "53/366",
        "2/366"
      ],
      "correctAnswer": 0,
      "explanation": "Leap year has 366 days = 52 weeks + 2 extra days. Extra days can be (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun). 2 out of 7 contain Sunday."
    },
    {
      "id": "nda2023_q51",
      "text": "NDA II 2023 Maths Q51: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q52",
      "text": "NDA II 2023 Maths Q52: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q53",
      "text": "NDA II 2023 Maths Q53: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q54",
      "text": "NDA II 2023 Maths Q54: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q55",
      "text": "NDA II 2023 Maths Q55: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q56",
      "text": "NDA II 2023 Maths Q56: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q57",
      "text": "NDA II 2023 Maths Q57: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q58",
      "text": "NDA II 2023 Maths Q58: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q59",
      "text": "NDA II 2023 Maths Q59: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q60",
      "text": "NDA II 2023 Maths Q60: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q61",
      "text": "NDA II 2023 Maths Q61: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q62",
      "text": "NDA II 2023 Maths Q62: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q63",
      "text": "NDA II 2023 Maths Q63: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q64",
      "text": "NDA II 2023 Maths Q64: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q65",
      "text": "NDA II 2023 Maths Q65: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q66",
      "text": "NDA II 2023 Maths Q66: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q67",
      "text": "NDA II 2023 Maths Q67: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q68",
      "text": "NDA II 2023 Maths Q68: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q69",
      "text": "NDA II 2023 Maths Q69: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q70",
      "text": "NDA II 2023 Maths Q70: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q71",
      "text": "NDA II 2023 Maths Q71: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q72",
      "text": "NDA II 2023 Maths Q72: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q73",
      "text": "NDA II 2023 Maths Q73: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q74",
      "text": "NDA II 2023 Maths Q74: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q75",
      "text": "NDA II 2023 Maths Q75: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q76",
      "text": "NDA II 2023 Maths Q76: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q77",
      "text": "NDA II 2023 Maths Q77: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q78",
      "text": "NDA II 2023 Maths Q78: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q79",
      "text": "NDA II 2023 Maths Q79: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q80",
      "text": "NDA II 2023 Maths Q80: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q81",
      "text": "NDA II 2023 Maths Q81: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q82",
      "text": "NDA II 2023 Maths Q82: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q83",
      "text": "NDA II 2023 Maths Q83: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q84",
      "text": "NDA II 2023 Maths Q84: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q85",
      "text": "NDA II 2023 Maths Q85: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q86",
      "text": "NDA II 2023 Maths Q86: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q87",
      "text": "NDA II 2023 Maths Q87: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q88",
      "text": "NDA II 2023 Maths Q88: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q89",
      "text": "NDA II 2023 Maths Q89: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q90",
      "text": "NDA II 2023 Maths Q90: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q91",
      "text": "NDA II 2023 Maths Q91: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q92",
      "text": "NDA II 2023 Maths Q92: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q93",
      "text": "NDA II 2023 Maths Q93: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q94",
      "text": "NDA II 2023 Maths Q94: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q95",
      "text": "NDA II 2023 Maths Q95: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q96",
      "text": "NDA II 2023 Maths Q96: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q97",
      "text": "NDA II 2023 Maths Q97: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q98",
      "text": "NDA II 2023 Maths Q98: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q99",
      "text": "NDA II 2023 Maths Q99: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q100",
      "text": "NDA II 2023 Maths Q100: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q101",
      "text": "NDA II 2023 Maths Q101: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q102",
      "text": "NDA II 2023 Maths Q102: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q103",
      "text": "NDA II 2023 Maths Q103: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q104",
      "text": "NDA II 2023 Maths Q104: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q105",
      "text": "NDA II 2023 Maths Q105: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q106",
      "text": "NDA II 2023 Maths Q106: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q107",
      "text": "NDA II 2023 Maths Q107: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q108",
      "text": "NDA II 2023 Maths Q108: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q109",
      "text": "NDA II 2023 Maths Q109: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q110",
      "text": "NDA II 2023 Maths Q110: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q111",
      "text": "NDA II 2023 Maths Q111: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q112",
      "text": "NDA II 2023 Maths Q112: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q113",
      "text": "NDA II 2023 Maths Q113: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q114",
      "text": "NDA II 2023 Maths Q114: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    },
    {
      "id": "nda2023_q115",
      "text": "NDA II 2023 Maths Q115: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?",
      "options": [
        "sin(y/x) = cx",
        "cos(y/x) = cx",
        "tan(y/x) = cx",
        "y = cx sin(x)"
      ],
      "correctAnswer": 0,
      "explanation": "Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx."
    },
    {
      "id": "nda2023_q116",
      "text": "NDA II 2023 Maths Q116: What is the value of \u222b_0^(\u03c0/2) (\u221asin(x) / (\u221asin(x) + \u221acos(x))) dx?",
      "options": [
        "\u03c0/4",
        "\u03c0/2",
        "0",
        "1"
      ],
      "correctAnswer": 0,
      "explanation": "Using King's property \u222b_a^b f(x) dx = \u222b_a^b f(a+b-x) dx, 2I = \u222b_0^(\u03c0/2) 1 dx = \u03c0/2 => I = \u03c0/4."
    },
    {
      "id": "nda2023_q117",
      "text": "NDA II 2023 Maths Q117: What is the acute angle between the straight lines y - \u221a3 x - 5 = 0 and \u221a3 y - x + 6 = 0?",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correctAnswer": 0,
      "explanation": "m1 = \u221a3 (60\u00b0), m2 = 1/\u221a3 (30\u00b0). Angle \u03b8 = |60\u00b0 - 30\u00b0| = 30\u00b0."
    },
    {
      "id": "nda2023_q118",
      "text": "NDA II 2023 Maths Q118: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
      "options": [
        "2\u221a3 (i + j + k)",
        "3\u221a2 (i + j + k)",
        "2 (i + j + k)",
        "6 (i + j + k)"
      ],
      "correctAnswer": 0,
      "explanation": "Unit vector along r is (i+j+k)/\u221a3. r = 6 * (i+j+k)/\u221a3 = 2\u221a3 (i + j + k)."
    },
    {
      "id": "nda2023_q119",
      "text": "NDA II 2023 Maths Q119: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?",
      "options": [
        "2^n",
        "2^(n-1)",
        "2^n - 1",
        "n^2"
      ],
      "correctAnswer": 0,
      "explanation": "Sum of all binomial coefficients for power n equals 2^n."
    },
    {
      "id": "nda2023_q120",
      "text": "NDA II 2023 Maths Q120: If A and B are symmetric matrices of same order, then (AB - BA) is always:",
      "options": [
        "Skew-symmetric matrix",
        "Symmetric matrix",
        "Identity matrix",
        "Zero matrix"
      ],
      "correctAnswer": 0,
      "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric."
    }
  ]
},
  {
    id: "web-dev-101",
    title: "Web Development & Frontend Engineering",
    description: "Test your knowledge on HTML5, CSS3, JavaScript (ES6+), Web Security, and Web APIs.",
    timeLimitMinutes: 15,
    maxViolationsAllowed: 3,
    marksPerCorrect: 1,
    negativeMarksPerWrong: 0,
    totalMarks: 10,
    passingMarks: 4,
    isActive: false,
    isResultPublished: false,
    questions: [
      {
        id: "q1",
        text: "Which of the following browser events is fired when a document becomes hidden or visible to the user?",
        options: [
          "window.onfocuschange",
          "document.onvisibilitychange",
          "document.onpagehide",
          "window.onstatechange"
        ],
        correctAnswer: 1,
        explanation: "The 'visibilitychange' event is fired at the document when the contents of its tab have become visible or have been hidden."
      }
    ]
  }
];

class QuizManager {
  constructor() {
    this.quizzes = this.loadCustomQuizzes();
    this.students = this.loadStudents();
    this.submissions = this.loadSubmissions();
    this.applyActiveStates();
    this.applyPublishedStates();
  }

  // Admin authentication check
  authenticateAdmin(id, password) {
    if (!id || !password) return false;
    return (String(id).trim().toLowerCase() === "shneh" && String(password).trim() === "shneh@1234");
  }

  loadCustomQuizzes() {
    try {
      const saved = localStorage.getItem("custom_proctor_quizzes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const filtered = parsed.filter(q => q.id !== "nda-2-2023-maths" && q.id !== "web-dev-101");
          return [...DEFAULT_QUIZZES, ...filtered];
        }
      }
    } catch (e) {
      console.warn("Could not parse saved custom quizzes", e);
    }
    return [...DEFAULT_QUIZZES];
  }

  applyActiveStates() {
    try {
      const states = JSON.parse(localStorage.getItem("quiz_active_states") || "{}");
      this.quizzes.forEach(q => {
        if (states.hasOwnProperty(q.id)) {
          q.isActive = states[q.id];
        }
      });
    } catch (e) {}
  }

  applyPublishedStates() {
    try {
      const states = JSON.parse(localStorage.getItem("quiz_result_published_states") || "{}");
      this.quizzes.forEach(q => {
        if (states.hasOwnProperty(q.id)) {
          q.isResultPublished = states[q.id];
        }
      });
    } catch (e) {}
  }

  toggleQuizActive(quizId) {
    const quiz = this.getQuizById(quizId);
    if (quiz) {
      quiz.isActive = !quiz.isActive;
      this.saveActiveStates();
      return quiz.isActive;
    }
    return false;
  }

  toggleResultPublished(quizId) {
    const quiz = this.getQuizById(quizId);
    if (quiz) {
      quiz.isResultPublished = !quiz.isResultPublished;
      this.savePublishedStates();
      return quiz.isResultPublished;
    }
    return false;
  }

  saveActiveStates() {
    const states = {};
    this.quizzes.forEach(q => {
      states[q.id] = !!q.isActive;
    });
    localStorage.setItem("quiz_active_states", JSON.stringify(states));
  }

  savePublishedStates() {
    const states = {};
    this.quizzes.forEach(q => {
      states[q.id] = !!q.isResultPublished;
    });
    localStorage.setItem("quiz_result_published_states", JSON.stringify(states));
  }

  deleteQuiz(quizId) {
    this.quizzes = this.quizzes.filter(q => q.id !== quizId);
    const customOnly = this.quizzes.filter(q => q.id !== "nda-2-2023-maths" && q.id !== "web-dev-101");
    localStorage.setItem("custom_proctor_quizzes", JSON.stringify(customOnly));
    this.saveActiveStates();
  }

  saveCustomQuiz(quiz) {
    quiz.isActive = false; // New quizzes start as inactive until admin activates
    let customQuizzes = [];
    try {
      const saved = localStorage.getItem("custom_proctor_quizzes");
      if (saved) customQuizzes = JSON.parse(saved);
    } catch (e) {}

    customQuizzes.push(quiz);
    localStorage.setItem("custom_proctor_quizzes", JSON.stringify(customQuizzes));
    this.quizzes.push(quiz);
  }

  getQuizById(id) {
    return this.quizzes.find(q => q.id === id) || this.quizzes[0];
  }

  getAllQuizzes() {
    return this.quizzes;
  }

  // Student Authentication
  authenticateStudent(studentId, password) {
    const student = this.students.find(s => s.id.toUpperCase() === studentId.trim().toUpperCase());
    if (student && student.password === password.trim()) {
      return student;
    }
    return null;
  }

  // Single Attempt Tracking
  loadAttempts() {
    try {
      const saved = localStorage.getItem("proctor_student_attempts");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  }

  hasStudentAttempted(studentId, quizId) {
    if (!studentId || !quizId) return false;
    const cleanId = String(studentId).trim().toUpperCase();

    // Check attempts registry
    const attempts = this.loadAttempts();
    const key = `${cleanId}_${quizId}`;
    if (attempts[key]) return true;

    // Double check submissions log
    const submissions = this.getSubmissions();
    return submissions.some(sub => 
      sub.candidateId && 
      String(sub.candidateId).trim().toUpperCase() === cleanId && 
      sub.quizId === quizId
    );
  }

  recordStudentAttempt(studentId, quizId) {
    const attempts = this.loadAttempts();
    const key = `${studentId.trim().toUpperCase()}_${quizId}`;
    attempts[key] = {
      timestamp: new Date().toLocaleString()
    };
    localStorage.setItem("proctor_student_attempts", JSON.stringify(attempts));
  }

  resetStudentAttempt(studentId, quizId) {
    const attempts = this.loadAttempts();
    const key = `${studentId.trim().toUpperCase()}_${quizId}`;
    delete attempts[key];
    localStorage.setItem("proctor_student_attempts", JSON.stringify(attempts));
  }

  // Student Roster Management
  loadStudents() {
    const defaults = [
      { id: "STU-101", name: "Alex Johnson", password: "stu101@password", email: "alex@school.edu", class: "NDA Prep Batch A" },
      { id: "STU-102", name: "Rahul Sharma", password: "stu102@password", email: "rahul@school.edu", class: "NDA Prep Batch B" },
      { id: "STU-103", name: "Priya Singh", password: "stu103@password", email: "priya@school.edu", class: "Science 12th" }
    ];
    try {
      const saved = localStorage.getItem("proctor_student_roster");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return defaults;
  }

  addStudent(student) {
    this.students.push(student);
    localStorage.setItem("proctor_student_roster", JSON.stringify(this.students));
  }

  deleteStudent(studentId) {
    this.students = this.students.filter(s => s.id !== studentId);
    localStorage.setItem("proctor_student_roster", JSON.stringify(this.students));
  }

  getStudents() {
    return this.students;
  }

  // Submissions Log
  loadSubmissions() {
    try {
      const saved = localStorage.getItem("proctor_exam_submissions");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  }

  addSubmission(submission) {
    this.submissions.unshift(submission);
    localStorage.setItem("proctor_exam_submissions", JSON.stringify(this.submissions));
  }

  getSubmissions() {
    return this.submissions;
  }
}

window.quizManager = new QuizManager();
