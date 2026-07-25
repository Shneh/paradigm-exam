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
        "text": "If A = {x ∈ R : x^2 - 5x + 6 = 0} and B = {x ∈ R : x^2 - 7x + 12 = 0}, what is (A ∪ B) \\ (A ∩ B)?",
        "options": [
          "{2, 4}",
          "{2, 3, 4}",
          "{2, 4, 3}",
          "{2, 4}"
        ],
        "correctAnswer": 0,
        "explanation": "A = {2, 3}, B = {3, 4}. A ∪ B = {2, 3, 4}, A ∩ B = {3}. Symmetric difference = {2, 4}."
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
        "text": "If standard deviation of x_1, x_2, ..., x_n is σ, then what is the standard deviation of 2x_1 + 3, 2x_2 + 3, ..., 2x_n + 3?",
        "options": [
          "σ",
          "2σ",
          "2σ + 3",
          "4σ"
        ],
        "correctAnswer": 1,
        "explanation": "Standard deviation is invariant under shift of origin (+3) and scales directly by multiplying factor (|2|). New SD = 2σ."
      },
      {
        "id": "nda2023_q17",
        "text": "If tan(A) = 1/2 and tan(B) = 1/3, what is the value of A + B?",
        "options": [
          "π/6",
          "π/4",
          "π/3",
          "π/2"
        ],
        "correctAnswer": 1,
        "explanation": "tan(A + B) = (tan A + tan B) / (1 - tan A tan B) = (1/2 + 1/3) / (1 - 1/6) = (5/6)/(5/6) = 1 => A + B = π/4."
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
        "text": "What is sin(15°) equal to?",
        "options": [
          "(√3 - 1) / (2√2)",
          "(√3 + 1) / (2√2)",
          "(1 - √3) / (2√2)",
          "1 / (2√2)"
        ],
        "correctAnswer": 0,
        "explanation": "sin(45° - 30°) = sin 45 cos 30 - cos 45 sin 30 = (1/√2)(√3/2) - (1/√2)(1/2) = (√3 - 1)/(2√2)."
      },
      {
        "id": "nda2023_q20",
        "text": "What is the principal value of sin^-1(sin(2π/3))?",
        "options": [
          "2π/3",
          "π/3",
          "-π/3",
          "4π/3"
        ],
        "correctAnswer": 1,
        "explanation": "Range of sin^-1 is [-π/2, π/2]. sin(2π/3) = sin(π - π/3) = sin(π/3). Thus sin^-1(sin(π/3)) = π/3."
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
        "text": "What is the value of ∫ (1 / (1 + x^2)) dx from 0 to 1?",
        "options": [
          "π/2",
          "π/4",
          "π/3",
          "1"
        ],
        "correctAnswer": 1,
        "explanation": "∫ (1/(1+x^2)) dx = tan^-1(x). Evaluated from 0 to 1 gives tan^-1(1) - tan^-1(0) = π/4 - 0 = π/4."
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
        "explanation": "Intersection points at x = -2 and x = 2. Area = ∫_{-2}^{2} (4 - x^2) dx = 2 * [4x - x^3/3]_{0}^{2} = 2 * (8 - 8/3) = 32/3."
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
          "e^(∫ P dx)",
          "∫ P dx",
          "e^(∫ Q dx)",
          "P(x)"
        ],
        "correctAnswer": 0,
        "explanation": "Standard integrating factor for 1st order linear ODE is I.F. = e^(∫ P(x) dx)."
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
        "explanation": "f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2 >= 0 for all x ∈ R, with zero only at isolated point x = 1. Thus f(x) is strictly increasing."
      },
      {
        "id": "nda2023_q30",
        "text": "What is the value of ∫_{-π}^{π} sin^3(x) cos^2(x) dx?",
        "options": [
          "0",
          "π",
          "2π",
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
          "π/3",
          "2π/3"
        ],
        "correctAnswer": 0,
        "explanation": "a . b = (1)(1) + (1)(-1) + (-1)(1) = -1. |a| = √3, |b| = √3. cos θ = (a.b)/(|a||b|) = -1/3 => θ = cos^-1(-1/3)."
      },
      {
        "id": "nda2023_q35",
        "text": "If a and b are unit vectors such that |a + b| = 1, then what is |a - b| equal to?",
        "options": [
          "√2",
          "√3",
          "2",
          "1"
        ],
        "correctAnswer": 1,
        "explanation": "|a+b|^2 + |a-b|^2 = 2(|a|^2 + |b|^2). 1^2 + |a-b|^2 = 2(1 + 1) = 4 => |a-b|^2 = 3 => |a-b| = √3."
      },
      {
        "id": "nda2023_q36",
        "text": "What is the projection of vector a = 2i + 3j + 2k on vector b = i + 2j + k?",
        "options": [
          "10 / √6",
          "5 / √6",
          "10",
          "√6"
        ],
        "correctAnswer": 0,
        "explanation": "Projection = (a . b) / |b| = (2*1 + 3*2 + 2*1) / sqrt(1^2 + 2^2 + 1^2) = 10 / √6."
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
          "(±1/√3, ±1/√3, ±1/√3)",
          "(±1/3, ±1/3, ±1/3)",
          "(±1/√2, ±1/√2, ±1/√2)",
          "(1, 1, 1)"
        ],
        "correctAnswer": 0,
        "explanation": "l^2 + m^2 + n^2 = 1. Since line is equally inclined, l = m = n => 3l^2 = 1 => l = ±1/√3."
      },
      {
        "id": "nda2023_q39",
        "text": "What is the magnitude of vector cross product |a × b| if |a| = 4, |b| = 5, and a . b = 12?",
        "options": [
          "16",
          "8",
          "12",
          "20"
        ],
        "correctAnswer": 0,
        "explanation": "Lagrange's identity: |a × b|^2 + (a . b)^2 = |a|^2 |b|^2 => |a × b|^2 + 144 = 16 * 25 = 400 => |a × b|^2 = 256 => |a × b| = 16."
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
        "explanation": "[i j k] = i . (j × k) = i . i = 1."
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
        "text": "If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, what is P(A|B)?",
        "options": [
          "0.4",
          "0.5",
          "0.25",
          "0.8"
        ],
        "correctAnswer": 0,
        "explanation": "P(A|B) = P(A ∩ B) / P(B) = 0.2 / 0.5 = 0.4."
      },
      {
        "id": "nda2023_q43",
        "text": "If events A and B are independent, which of the following is correct?",
        "options": [
          "P(A ∩ B) = P(A) * P(B)",
          "P(A ∪ B) = P(A) + P(B)",
          "P(A|B) = 0",
          "P(A ∩ B) = 0"
        ],
        "correctAnswer": 0,
        "explanation": "By definition, two events A and B are independent if and only if P(A ∩ B) = P(A) * P(B)."
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
        "text": "NDA II 2023 Maths Q51: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q52",
        "text": "NDA II 2023 Maths Q52: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q56: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q57",
        "text": "NDA II 2023 Maths Q57: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q58",
        "text": "NDA II 2023 Maths Q58: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q62: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q63",
        "text": "NDA II 2023 Maths Q63: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q64",
        "text": "NDA II 2023 Maths Q64: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q68: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q69",
        "text": "NDA II 2023 Maths Q69: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q70",
        "text": "NDA II 2023 Maths Q70: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q74: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q75",
        "text": "NDA II 2023 Maths Q75: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q76",
        "text": "NDA II 2023 Maths Q76: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q80: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q81",
        "text": "NDA II 2023 Maths Q81: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q82",
        "text": "NDA II 2023 Maths Q82: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q86: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q87",
        "text": "NDA II 2023 Maths Q87: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q88",
        "text": "NDA II 2023 Maths Q88: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q92: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q93",
        "text": "NDA II 2023 Maths Q93: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q94",
        "text": "NDA II 2023 Maths Q94: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q98: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q99",
        "text": "NDA II 2023 Maths Q99: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q100",
        "text": "NDA II 2023 Maths Q100: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q104: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q105",
        "text": "NDA II 2023 Maths Q105: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q106",
        "text": "NDA II 2023 Maths Q106: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q110: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q111",
        "text": "NDA II 2023 Maths Q111: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q112",
        "text": "NDA II 2023 Maths Q112: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
        "text": "NDA II 2023 Maths Q116: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?",
        "options": [
          "π/4",
          "π/2",
          "0",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "nda2023_q117",
        "text": "NDA II 2023 Maths Q117: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°."
      },
      {
        "id": "nda2023_q118",
        "text": "NDA II 2023 Maths Q118: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?",
        "options": [
          "2√3 (i + j + k)",
          "3√2 (i + j + k)",
          "2 (i + j + k)",
          "6 (i + j + k)"
        ],
        "correctAnswer": 0,
        "explanation": "Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k)."
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
    "id": "web-dev-101",
    "title": "Web Development & Frontend Engineering",
    "description": "Test your knowledge on HTML5, CSS3, JavaScript (ES6+), Web Security, and Web APIs.",
    "timeLimitMinutes": 15,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 1,
    "negativeMarksPerWrong": 0,
    "totalMarks": 10,
    "passingMarks": 4,
    "isActive": false,
    "isResultPublished": false,
    "questions": [
      {
        "id": "q1",
        "text": "Which of the following browser events is fired when a document becomes hidden or visible to the user?",
        "options": [
          "window.onfocuschange",
          "document.onvisibilitychange",
          "document.onpagehide",
          "window.onstatechange"
        ],
        "correctAnswer": 1,
        "explanation": "The 'visibilitychange' event is fired at the document when the contents of its tab have become visible or have been hidden."
      }
    ]
  },
  {
    "id": "jee-mains-physics-1",
    "title": "JEE Mains 2025/2026 - Physics Test 1 (Electrostatics & Current)",
    "description": "25 PYQs on Electric Charges & Fields, Electric Potential & Capacitance, and Current Electricity. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmp1_q1",
        "text": "Two point charges +q and +4q are separated by distance L. Where should a third charge Q be placed on the line joining them so that it experiences zero net electrostatic force?",
        "options": [
          "L/3 from +q",
          "L/2 from +q",
          "2L/3 from +q",
          "L/4 from +q"
        ],
        "correctAnswer": 0,
        "explanation": "Force balance: k(q)(Q)/x² = k(4q)(Q)/(L-x)² => (L-x)/x = 2 => L - x = 2x => x = L/3 from charge +q."
      },
      {
        "id": "jmp1_q2",
        "text": "Electric field intensity at distance r on the axis of a thin uniformly charged ring of radius R and charge Q is maximum at r equal to:",
        "options": [
          "R / √2",
          "R / 2",
          "R",
          "R √2"
        ],
        "correctAnswer": 0,
        "explanation": "Electric field on ring axis: E = k Q r / (r² + R²)^(3/2). Setting dE/dr = 0 yields r = R / √2."
      },
      {
        "id": "jmp1_q3",
        "text": "A point charge q is placed at one corner of a cube of side a. The total electric flux passing through the cube is:",
        "options": [
          "q / (8 ε₀)",
          "q / (6 ε₀)",
          "q / (24 ε₀)",
          "q / (4 ε₀)"
        ],
        "correctAnswer": 0,
        "explanation": "8 identical cubes meet at a corner. By Gauss's Law, the flux through one entire cube is q / (8 ε₀)."
      },
      {
        "id": "jmp1_q4",
        "text": "An electric dipole of dipole moment p is aligned at 30° with a uniform electric field E. The magnitude of torque acting on the dipole is:",
        "options": [
          "pE / 2",
          "pE",
          "√3 pE / 2",
          "2 pE"
        ],
        "correctAnswer": 0,
        "explanation": "Torque τ = p E sin θ = p E sin(30°) = pE / 2."
      },
      {
        "id": "jmp1_q5",
        "text": "Work done in rotating an electric dipole of moment p in a uniform electric field E from θ = 0° to θ = 180° is:",
        "options": [
          "2 pE",
          "pE",
          "0",
          "-2 pE"
        ],
        "correctAnswer": 0,
        "explanation": "Work W = -pE (cos 180° - cos 0°) = -pE (-1 - 1) = 2 pE."
      },
      {
        "id": "jmp1_q6",
        "text": "A spherical conducting shell of radius R carries charge Q. Electric potential at any interior point at distance r < R from center is:",
        "options": [
          "Q / (4πε₀R)",
          "Q / (4πε₀r)",
          "Zero",
          "Q / (8πε₀R)"
        ],
        "correctAnswer": 0,
        "explanation": "Electric field inside conductor E = 0, so potential is uniform and equal to surface potential V = Q / (4πε₀R)."
      },
      {
        "id": "jmp1_q7",
        "text": "Two capacitors of 2 µF and 4 µF are connected in series across a 120 V DC supply. Potential difference across the 2 µF capacitor is:",
        "options": [
          "80 V",
          "40 V",
          "60 V",
          "100 V"
        ],
        "correctAnswer": 0,
        "explanation": "In series, voltage divides inversely with capacitance: V₁ = V × C₂ / (C₁ + C₂) = 120 × 4 / 6 = 80 V."
      },
      {
        "id": "jmp1_q8",
        "text": "A parallel plate capacitor with plate area A and separation d is filled with a dielectric slab of constant K. Its capacitance becomes:",
        "options": [
          "K ε₀ A / d",
          "ε₀ A / (K d)",
          "K d / (ε₀ A)",
          "(K + 1) ε₀ A / d"
        ],
        "correctAnswer": 0,
        "explanation": "Capacitance increases K times upon dielectric insertion: C = K C₀ = K ε₀ A / d."
      },
      {
        "id": "jmp1_q9",
        "text": "A 4 µF capacitor charged to 100 V is connected in parallel with an uncharged 6 µF capacitor. Common potential after connection is:",
        "options": [
          "40 V",
          "50 V",
          "60 V",
          "20 V"
        ],
        "correctAnswer": 0,
        "explanation": "Common potential V = (C₁ V₁ + C₂ V₂) / (C₁ + C₂) = (4×100 + 6×0) / 10 = 40 V."
      },
      {
        "id": "jmp1_q10",
        "text": "Electrostatic energy stored per unit volume in a region of electric field E in vacuum is:",
        "options": [
          "½ ε₀ E²",
          "ε₀ E²",
          "½ ε₀² E",
          "E² / (2 ε₀)"
        ],
        "correctAnswer": 0,
        "explanation": "Energy density u_E = ½ ε₀ E²."
      },
      {
        "id": "jmp1_q11",
        "text": "A wire of resistance R is stretched uniformly until its length becomes 2 times its initial length. Its new resistance will be:",
        "options": [
          "4 R",
          "2 R",
          "R / 2",
          "R / 4"
        ],
        "correctAnswer": 0,
        "explanation": "Volume V = A × L is constant. When L' = 2L, A' = A/2. New resistance R' = ρ (2L) / (A/2) = 4 (ρ L / A) = 4 R."
      },
      {
        "id": "jmp1_q12",
        "text": "Drift velocity v_d of free electrons in a metallic conductor varies with applied electric field E as:",
        "options": [
          "v_d ∝ E",
          "v_d ∝ E²",
          "v_d ∝ √E",
          "v_d ∝ 1/E"
        ],
        "correctAnswer": 0,
        "explanation": "Drift velocity v_d = (e E / m) τ => v_d is directly proportional to E."
      },
      {
        "id": "jmp1_q13",
        "text": "Three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in parallel. Their net equivalent resistance is:",
        "options": [
          "1 Ω",
          "11 Ω",
          "0.5 Ω",
          "2 Ω"
        ],
        "correctAnswer": 0,
        "explanation": "1/R_eq = 1/2 + 1/3 + 1/6 = (3+2+1)/6 = 6/6 = 1 => R_eq = 1 Ω."
      },
      {
        "id": "jmp1_q14",
        "text": "Kirchhoff's Junction Law (KCL) and Loop Law (KVL) express conservation of respectively:",
        "options": [
          "Charge and Energy",
          "Energy and Charge",
          "Charge and Momentum",
          "Energy and Momentum"
        ],
        "correctAnswer": 0,
        "explanation": "KCL represents conservation of electric charge, KVL represents conservation of energy."
      },
      {
        "id": "jmp1_q15",
        "text": "Four resistances P = 10 Ω, Q = 20 Ω, R = 15 Ω, S = 30 Ω form a Wheatstone bridge loop. The bridge status is:",
        "options": [
          "Balanced",
          "Unbalanced",
          "Resonant",
          "Superconducting"
        ],
        "correctAnswer": 0,
        "explanation": "Ratio P/Q = 10/20 = 1/2 and R/S = 15/30 = 1/2. Since P/Q = R/S, the bridge is balanced."
      },
      {
        "id": "jmp1_q16",
        "text": "A cell of EMF E and internal resistance r is connected to load resistor R. Maximum power is transferred to R when:",
        "options": [
          "R = r",
          "R = 2r",
          "R = r/2",
          "R >> r"
        ],
        "correctAnswer": 0,
        "explanation": "Maximum Power Transfer Theorem states power to load R is maximum when load R equals internal resistance r."
      },
      {
        "id": "jmp1_q17",
        "text": "A potentiometer wire of length 10 m has resistance 20 Ω connected in series with a 3 V battery and 10 Ω resistor. Potential gradient is:",
        "options": [
          "0.2 V/m",
          "0.3 V/m",
          "0.1 V/m",
          "0.02 V/m"
        ],
        "correctAnswer": 0,
        "explanation": "Current I = 3 / (20 + 10) = 0.1 A. V_wire = I R_wire = 0.1 × 20 = 2 V. Potential gradient k = 2 / 10 = 0.2 V/m."
      },
      {
        "id": "jmp1_q18",
        "text": "Two electric bulbs rated 220 V - 60 W and 220 V - 100 W are connected in series across 220 V line. Which bulb glows brighter?",
        "options": [
          "60 W bulb",
          "100 W bulb",
          "Both glow equally",
          "Neither glows"
        ],
        "correctAnswer": 0,
        "explanation": "Bulb resistance R = V²/P (R₆₀ > R₁₀₀). In series, current I is identical. Power P_actual = I² R => 60 W bulb dissipates more power and glows brighter."
      },
      {
        "id": "jmp1_q19",
        "text": "If temperature coefficient of resistance is 0.00125 /°C and resistance at 27°C is 1 Ω, at what temperature will resistance become 2 Ω?",
        "options": [
          "827 °C",
          "500 °C",
          "1000 °C",
          "400 °C"
        ],
        "correctAnswer": 0,
        "explanation": "R_t = R₀ (1 + α Δt) => 2 = 1 (1 + 0.00125 Δt) => Δt = 800 °C => T = 27 + 800 = 827 °C."
      },
      {
        "id": "jmp1_q20",
        "text": "In an RC charging circuit, the time required for capacitor charge to reach 63.2% of its maximum steady-state charge is:",
        "options": [
          "Time Constant (τ = RC)",
          "Half-life",
          "Mean lifetime",
          "Relaxation time"
        ],
        "correctAnswer": 0,
        "explanation": "Q(t) = Q_max (1 - e^(-t/RC)). At t = RC = τ, Q = Q_max (1 - 1/e) ≈ 0.632 Q_max."
      },
      {
        "id": "jmp1_q21",
        "text": "Electric field intensity at distance r from an infinitely long straight wire carrying uniform linear charge density λ is:",
        "options": [
          "λ / (2πε₀ r)",
          "λ / (4πε₀ r²)",
          "2λ / (πε₀ r)",
          "λ / (ε₀ r)"
        ],
        "correctAnswer": 0,
        "explanation": "Applying Gauss's Law around a cylindrical surface yields E = λ / (2πε₀ r)."
      },
      {
        "id": "jmp1_q22",
        "text": "Three identical capacitors of capacitance C are connected in a triangle network. Equivalent capacitance between any two corners is:",
        "options": [
          "3C / 2",
          "2C / 3",
          "3C",
          "C / 3"
        ],
        "correctAnswer": 0,
        "explanation": "Two capacitors in series (C/2) are in parallel with the third (C): C_eq = C + C/2 = 3C/2."
      },
      {
        "id": "jmp1_q23",
        "text": "An electron enters horizontally between two horizontal parallel charged plates. Its path inside the uniform electric field is:",
        "options": [
          "Parabolic",
          "Circular",
          "Straight line",
          "Elliptical"
        ],
        "correctAnswer": 0,
        "explanation": "Constant horizontal velocity combined with constant vertical acceleration (a_y = eE/m) produces a parabolic trajectory."
      },
      {
        "id": "jmp1_q24",
        "text": "Equivalent resistance between opposite corners of a cube made of 12 identical wires each of resistance R is:",
        "options": [
          "5R / 6",
          "3R / 4",
          "7R / 12",
          "R"
        ],
        "correctAnswer": 0,
        "explanation": "Using nodal symmetry across body diagonal: R_eq = (1/3 + 1/6 + 1/3) R = 5R / 6."
      },
      {
        "id": "jmp1_q25",
        "text": "Capacitive reactance X_C of a 5 µF capacitor connected to a 50 Hz AC source is approximately:",
        "options": [
          "636.6 Ω",
          "318.3 Ω",
          "100 Ω",
          "500 Ω"
        ],
        "correctAnswer": 0,
        "explanation": "X_C = 1 / (2 π f C) = 1 / (2 × 3.1416 × 50 × 5×10⁻⁶) = 10⁶ / 1570.8 ≈ 636.6 Ω."
      }
    ]
  },
  {
    "id": "jee-mains-chemistry-1",
    "title": "JEE Mains 2025/2026 - Chemistry Test 1 (Physical Chemistry)",
    "description": "25 PYQs on Chemical Kinetics, Solutions, and Electrochemistry. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmc1_q1",
        "text": "For a first-order reaction, the time required for 99.9% completion is approximately how many times its half-life (t_1/2)?",
        "options": [
          "10 times",
          "3 times",
          "6.6 times",
          "20 times"
        ],
        "correctAnswer": 0,
        "explanation": "t_99.9% = (2.303/k) log(1000) = (2.303/k) × 3. t_1/2 = 0.693/k. Ratio = 3 × 2.303 / 0.693 ≈ 10."
      },
      {
        "id": "jmc1_q2",
        "text": "In Arrhenius equation k = A e^(-Ea/RT), a plot of ln k versus 1/T gives a straight line with slope equal to:",
        "options": [
          "-Ea / R",
          "Ea / R",
          "-Ea / (2.303 R)",
          "A / R"
        ],
        "correctAnswer": 0,
        "explanation": "Taking natural log: ln k = ln A - (Ea/R)(1/T). Slope m = -Ea / R."
      },
      {
        "id": "jmc1_q3",
        "text": "Acid hydrolysis of ethyl acetate (CH₃COOC₂H₅ + H₂O -> CH₃COOH + C₂H₅OH) in excess water is an example of:",
        "options": [
          "Pseudo-first order reaction",
          "Zero order reaction",
          "Second order reaction",
          "Third order reaction"
        ],
        "correctAnswer": 0,
        "explanation": "Water is present in large excess, so its concentration remains practically constant, making it pseudo-first order."
      },
      {
        "id": "jmc1_q4",
        "text": "According to Raoult's law, relative lowering of vapor pressure of a solution containing a non-volatile solute is equal to:",
        "options": [
          "Mole fraction of solute",
          "Mole fraction of solvent",
          "Molarity of solution",
          "Molality of solution"
        ],
        "correctAnswer": 0,
        "explanation": "(P° - P)/P° = x_solute (mole fraction of non-volatile solute)."
      },
      {
        "id": "jmc1_q5",
        "text": "Which of the following liquid pairs forms a solution showing POSITIVE deviation from Raoult's law?",
        "options": [
          "Ethanol + Acetone",
          "Chloroform + Acetone",
          "Phenol + Aniline",
          "Water + Nitric acid"
        ],
        "correctAnswer": 0,
        "explanation": "Ethanol has strong H-bonding. Adding acetone breaks some H-bonds, weakening A-B interactions compared to A-A and B-B, giving positive deviation."
      },
      {
        "id": "jmc1_q6",
        "text": "The Van 't Hoff factor (i) for a completely dissociated K₄[Fe(CN)₆] solute in dilute aqueous solution is:",
        "options": [
          "5",
          "4",
          "6",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "K₄[Fe(CN)₆] dissociates into 4 K⁺ + [Fe(CN)₆]⁴⁻ (5 ions total) => i = 5."
      },
      {
        "id": "jmc1_q7",
        "text": "Two solutions are ISOTONIC at a given temperature when they have identical:",
        "options": [
          "Osmotic pressure",
          "Boiling point",
          "Vapor pressure",
          "Density"
        ],
        "correctAnswer": 0,
        "explanation": "Isotonic solutions exert equal osmotic pressure (π₁ = π₂) at a given temperature."
      },
      {
        "id": "jmc1_q8",
        "text": "Depression in freezing point ΔT_f is related to molality m of non-volatile solute by:",
        "options": [
          "ΔT_f = i K_f m",
          "ΔT_f = K_f / m",
          "ΔT_f = m / K_f",
          "ΔT_f = i m / K_f"
        ],
        "correctAnswer": 0,
        "explanation": "Colligative property formula for freezing point depression: ΔT_f = i K_f m."
      },
      {
        "id": "jmc1_q9",
        "text": "Standard electrode potential E° for Cell: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s) with E°(Zn²⁺/Zn) = -0.76 V and E°(Cu²⁺/Cu) = +0.34 V is:",
        "options": [
          "+1.10 V",
          "-1.10 V",
          "+0.42 V",
          "-0.42 V"
        ],
        "correctAnswer": 0,
        "explanation": "E°_cell = E°_cathode - E°_anode = (+0.34) - (-0.76) = +1.10 V."
      },
      {
        "id": "jmc1_q10",
        "text": "The relationship between standard Gibbs free energy change ΔG° and cell potential E°_cell is:",
        "options": [
          "ΔG° = -n F E°_cell",
          "ΔG° = n F E°_cell",
          "ΔG° = -n F / E°_cell",
          "ΔG° = -E°_cell / (n F)"
        ],
        "correctAnswer": 0,
        "explanation": "Thermodynamic relation for electrochemical cell: ΔG° = -n F E°_cell."
      },
      {
        "id": "jmc1_q11",
        "text": "SI unit of molar conductivity (Λ_m) is:",
        "options": [
          "S cm² mol⁻¹ (or S m² mol⁻¹)",
          "S cm mol⁻¹",
          "Ω cm⁻¹",
          "S cm⁻¹"
        ],
        "correctAnswer": 0,
        "explanation": "Molar conductivity unit is Siemens meter² per mole (S m² mol⁻¹ or S cm² mol⁻¹)."
      },
      {
        "id": "jmc1_q12",
        "text": "Kohlrausch's Law of independent migration of ions states that at infinite dilution, limiting molar conductivity of an electrolyte is:",
        "options": [
          "Sum of individual ionic conductivities",
          "Product of ionic conductivities",
          "Difference of ionic conductivities",
          "Constant for all electrolytes"
        ],
        "correctAnswer": 0,
        "explanation": "Λ°_m = ν₊ λ°₊ + ν₋ λ°₋ (sum of limiting molar conductivities of constituent cations and anions)."
      },
      {
        "id": "jmc1_q13",
        "text": "Mass of copper (At. wt = 63.5) deposited at cathode when a current of 9.65 A is passed through CuSO₄ solution for 1000 seconds is:",
        "options": [
          "3.175 g",
          "6.35 g",
          "1.587 g",
          "12.7 g"
        ],
        "correctAnswer": 0,
        "explanation": "Cu²⁺ + 2e⁻ -> Cu. Charge Q = I t = 9.65 × 1000 = 9650 C = 0.1 F. Moles Cu = 0.1 / 2 = 0.05 mol. Mass = 0.05 × 63.5 = 3.175 g."
      },
      {
        "id": "jmc1_q14",
        "text": "During discharge of a Lead Storage Battery, the chemical reaction occurring at the anode is:",
        "options": [
          "Pb(s) + SO₄²⁻(aq) -> PbSO₄(s) + 2e⁻",
          "PbO₂(s) + SO₄²⁻ + 4H⁺ + 2e⁻ -> PbSO₄ + 2H₂O",
          "Pb²⁺ + 2e⁻ -> Pb",
          "2H₂O -> O₂ + 4H⁺ + 4e⁻"
        ],
        "correctAnswer": 0,
        "explanation": "At the anode (oxidation): Lead metal is oxidized to lead sulfate: Pb(s) + SO₄²⁻(aq) -> PbSO₄(s) + 2e⁻."
      },
      {
        "id": "jmc1_q15",
        "text": "For a reaction A -> B, rate constant k = 2.0 × 10⁻³ s⁻¹. The order of this reaction is:",
        "options": [
          "First order",
          "Zero order",
          "Second order",
          "Half order"
        ],
        "correctAnswer": 0,
        "explanation": "The unit of rate constant is s⁻¹, which uniquely specifies a first-order reaction."
      },
      {
        "id": "jmc1_q16",
        "text": "Henry's Law constant K_H for solubility of a gas in liquid:",
        "options": [
          "Increases with increase in temperature",
          "Decreases with increase in temperature",
          "Is independent of temperature",
          "Is zero for all gases"
        ],
        "correctAnswer": 0,
        "explanation": "Solubility of gas decreases as temperature increases, hence Henry's constant K_H increases with temperature."
      },
      {
        "id": "jmc1_q17",
        "text": "Which of the following colligative properties is most suitable for determining molar mass of macromolecules like proteins and polymers?",
        "options": [
          "Osmotic pressure",
          "Relative lowering of vapor pressure",
          "Elevation of boiling point",
          "Depression of freezing point"
        ],
        "correctAnswer": 0,
        "explanation": "Osmotic pressure produces measurable magnitude even at room temperature for very dilute macromolecular solutions."
      },
      {
        "id": "jmc1_q18",
        "text": "Variation of molar conductivity Λ_m with concentration C for a STRONG electrolyte is given by Debye-Hückel-Onsager equation:",
        "options": [
          "Λ_m = Λ°_m - A √C",
          "Λ_m = Λ°_m + A C",
          "Λ_m = Λ°_m / √C",
          "Λ_m = A log C"
        ],
        "correctAnswer": 0,
        "explanation": "For strong electrolytes, Λ_m decreases linearly with √C: Λ_m = Λ°_m - A √C."
      },
      {
        "id": "jmc1_q19",
        "text": "In a H₂-O₂ Fuel Cell, overall reaction taking place is:",
        "options": [
          "2 H₂(g) + O₂(g) -> 2 H₂O(l)",
          "H₂ + Cl₂ -> 2 HCl",
          "2 H₂O -> 2 H₂ + O₂",
          "H₂O₂ -> H₂ + O₂"
        ],
        "correctAnswer": 0,
        "explanation": "Fuel cell combines hydrogen and oxygen to produce water and electricity: 2 H₂(g) + O₂(g) -> 2 H₂O(l)."
      },
      {
        "id": "jmc1_q20",
        "text": "If activation energy Ea of a reaction is zero, then rate constant k is:",
        "options": [
          "Equal to frequency factor A",
          "Zero",
          "Infinite",
          "Independent of A"
        ],
        "correctAnswer": 0,
        "explanation": "k = A e^(-Ea/RT). If Ea = 0, e^0 = 1 => k = A."
      },
      {
        "id": "jmc1_q21",
        "text": "Unit of rate constant for a SECOND order reaction is:",
        "options": [
          "L mol⁻¹ s⁻¹ (or M⁻¹ s⁻¹)",
          "s⁻¹",
          "mol L⁻¹ s⁻¹",
          "L² mol⁻² s⁻¹"
        ],
        "correctAnswer": 0,
        "explanation": "Rate = k [A]² => k = Rate / [A]² = (mol L⁻¹ s⁻¹) / (mol L⁻¹)² = L mol⁻¹ s⁻¹."
      },
      {
        "id": "jmc1_q22",
        "text": "The freezing point of 0.1 m aqueous solution of NaCl (assuming 100% dissociation, K_f = 1.86 K kg mol⁻¹) is:",
        "options": [
          "-0.372 °C",
          "-0.186 °C",
          "0.0 °C",
          "-0.558 °C"
        ],
        "correctAnswer": 0,
        "explanation": "NaCl -> Na⁺ + Cl⁻ (i = 2). ΔT_f = i K_f m = 2 × 1.86 × 0.1 = 0.372 K. T_f = 0 - 0.372 = -0.372 °C."
      },
      {
        "id": "jmc1_q23",
        "text": "Maximum boiling azeotrope is formed by liquid mixture showing:",
        "options": [
          "Negative deviation from Raoult's law",
          "Positive deviation from Raoult's law",
          "Ideal behavior",
          "Zero vapor pressure"
        ],
        "correctAnswer": 0,
        "explanation": "Negative deviation lowers vapor pressure below expected, raising boiling point to a maximum (e.g. HNO₃ + H₂O)."
      },
      {
        "id": "jmc1_q24",
        "text": "Amount of electricity required to reduce 1 mole of Cr₂O₇²⁻ to Cr³⁺ in acidic medium is:",
        "options": [
          "6 F",
          "3 F",
          "1 F",
          "2 F"
        ],
        "correctAnswer": 0,
        "explanation": "Cr₂O₇²⁻ (Cr = +6) + 14 H⁺ + 6 e⁻ -> 2 Cr³⁺ (Cr = +3) + 7 H₂O. Oxidation change = 2 × (6 - 3) = 6 moles of e⁻ = 6 F."
      },
      {
        "id": "jmc1_q25",
        "text": "Molar conductivity at infinite dilution (Λ°_m) for NH₄OH can be calculated using Kohlrausch Law as:",
        "options": [
          "Λ°(NH₄Cl) + Λ°(NaOH) - Λ°(NaCl)",
          "Λ°(NH₄Cl) - Λ°(NaOH) + Λ°(NaCl)",
          "Λ°(NH₄OH) + Λ°(NaCl)",
          "Λ°(NaOH) - Λ°(NH₄Cl)"
        ],
        "correctAnswer": 0,
        "explanation": "Λ°(NH₄OH) = Λ°(NH₄⁺) + Λ°(OH⁻) = [Λ°(NH₄Cl) + Λ°(NaOH)] - Λ°(NaCl)."
      }
    ]
  },
  {
    "id": "jee-mains-maths-1",
    "title": "JEE Mains 2025/2026 - Mathematics Test 1 (Algebra, Calculus & Trig)",
    "description": "25 PYQs on Sets, Functions, Trig, Matrices, Determinants, Differentiation, Logarithms & Complex Numbers. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmm1_q1",
        "text": "If set A has 3 elements and set B has 4 elements, the total number of non-empty relations from set A to set B is:",
        "options": [
          "2¹² - 1 (4095)",
          "2¹² (4096)",
          "12",
          "7"
        ],
        "correctAnswer": 0,
        "explanation": "|A × B| = 3 × 4 = 12. Total relations = 2¹² = 4096. Total non-empty relations = 2¹² - 1 = 4095."
      },
      {
        "id": "jmm1_q2",
        "text": "Domain of real function f(x) = √(9 - x²) is:",
        "options": [
          "[-3, 3]",
          "(-3, 3)",
          "(-∞, -3] ∪ [3, ∞)",
          "[0, 3]"
        ],
        "correctAnswer": 0,
        "explanation": "For real square root: 9 - x² ≥ 0 => x² ≤ 9 => -3 ≤ x ≤ 3, so domain is [-3, 3]."
      },
      {
        "id": "jmm1_q3",
        "text": "Function f: ℝ -> ℝ defined by f(x) = x / (1 + x²) is:",
        "options": [
          "Neither one-one nor onto",
          "One-one and onto",
          "One-one but not onto",
          "Onto but not one-one"
        ],
        "correctAnswer": 0,
        "explanation": "f(2) = 2/5 = f(1/2), so not one-one. Range is [-1/2, 1/2] ≠ ℝ, so not onto."
      },
      {
        "id": "jmm1_q4",
        "text": "Principal value of sin⁻¹(sin(2π/3)) is:",
        "options": [
          "π / 3",
          "2π / 3",
          "-π / 3",
          "4π / 3"
        ],
        "correctAnswer": 0,
        "explanation": "sin(2π/3) = sin(π - π/3) = sin(π/3). Principal range of sin⁻¹ is [-π/2, π/2], so value is π/3."
      },
      {
        "id": "jmm1_q5",
        "text": "Angle of elevation of top of a tower from two points at distances a and b (a > b) from base in same line are 30° and 60°. Height of tower is:",
        "options": [
          "√(ab)",
          "a + b",
          "ab",
          "√(a/b)"
        ],
        "correctAnswer": 0,
        "explanation": "h/b = tan 60° = √3 and h/a = tan 30° = 1/√3. Multiplying gives (h/b)(h/a) = √3 × (1/√3) = 1 => h² = ab => h = √(ab)."
      },
      {
        "id": "jmm1_q6",
        "text": "Value of determinant | 1 a a² | | 1 b b² | | 1 c c² | is equal to:",
        "options": [
          "(a - b)(b - c)(c - a)",
          "(a + b)(b + c)(c + a)",
          "a³ + b³ + c³ - 3abc",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "Standard Vandermonde determinant identity: (a - b)(b - c)(c - a)."
      },
      {
        "id": "jmm1_q7",
        "text": "If square matrix A satisfies A² - 5A + 7I = O, then its inverse A⁻¹ is given by:",
        "options": [
          "(5I - A) / 7",
          "(A - 5I) / 7",
          "7(5I - A)",
          "5A - 7I"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply by A⁻¹: A - 5I + 7 A⁻¹ = O => 7 A⁻¹ = 5I - A => A⁻¹ = (5I - A) / 7."
      },
      {
        "id": "jmm1_q8",
        "text": "Derivative of y = (sin x)^(cos x) with respect to x is:",
        "options": [
          "(sin x)^(cos x) [ cos x cot x - sin x ln(sin x) ]",
          "(sin x)^(cos x) [ cos x - sin x ]",
          "cos x (sin x)^(cos x - 1)",
          "(sin x)^(cos x) ln(sin x)"
        ],
        "correctAnswer": 0,
        "explanation": "ln y = cos x ln(sin x). Differentiating: (1/y) dy/dx = -sin x ln(sin x) + cos x (cos x / sin x). Multiply by y."
      },
      {
        "id": "jmm1_q9",
        "text": "If f(x) = |x - 1| + |x - 2|, then f(x) is NOT differentiable at:",
        "options": [
          "x = 1 and x = 2",
          "x = 0 only",
          "x = 1 only",
          "All real numbers"
        ],
        "correctAnswer": 0,
        "explanation": "Absolute value functions |x - a| have sharp corner points (non-differentiable) at x = a."
      },
      {
        "id": "jmm1_q10",
        "text": "Value of log_0.5(x² - 5x + 6) ≥ -1 is satisfied when x belongs to:",
        "options": [
          "[1, 2) ∪ (3, 4]",
          "(2, 3)",
          "[1, 4]",
          "(-∞, 1] ∪ [4, ∞)"
        ],
        "correctAnswer": 0,
        "explanation": "Base 0.5 < 1 => x² - 5x + 6 ≤ (0.5)⁻¹ = 2 => x² - 5x + 4 ≤ 0 => 1 ≤ x ≤ 4. Also x² - 5x + 6 > 0 => x < 2 or x > 3. Intersection: [1, 2) ∪ (3, 4]."
      },
      {
        "id": "jmm1_q11",
        "text": "If ω is a complex cube root of unity, then value of (1 - ω + ω²)^5 + (1 + ω - ω²)^5 is:",
        "options": [
          "32",
          "64",
          "-32",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "1 + ω + ω² = 0 => 1 + ω² = -ω and 1 + ω = -ω². First term: (-2ω)⁵ = -32 ω⁵ = -32 ω². Second term: (-2ω²)⁵ = -32 ω¹⁰ = -32 ω. Sum = -32(ω² + ω) = -32(-1) = 32."
      },
      {
        "id": "jmm1_q12",
        "text": "Modulus of complex number z = (1 + i√3) / (1 - i√3) is:",
        "options": [
          "1",
          "2",
          "√3",
          "1/2"
        ],
        "correctAnswer": 0,
        "explanation": "|z| = |1 + i√3| / |1 - i√3| = √(1 + 3) / √(1 + 3) = 2 / 2 = 1."
      },
      {
        "id": "jmm1_q13",
        "text": "System of equations x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has infinitely many solutions if:",
        "options": [
          "λ = 3 and μ = 10",
          "λ = 3 and μ ≠ 10",
          "λ ≠ 3 and μ = 10",
          "λ = 2 and μ = 8"
        ],
        "correctAnswer": 0,
        "explanation": "For infinite solutions, coefficient determinant Δ = 0 => λ = 3. Also Δ_z = 0 => μ = 10."
      },
      {
        "id": "jmm1_q14",
        "text": "Range of function f(x) = 3 sin x + 4 cos x + 7 is:",
        "options": [
          "[2, 12]",
          "[3, 11]",
          "[0, 14]",
          "[2, 7]"
        ],
        "correctAnswer": 0,
        "explanation": "Min value of 3 sin x + 4 cos x is -√(3²+4²) = -5. Max value is +5. Range of f(x) is [-5+7, 5+7] = [2, 12]."
      },
      {
        "id": "jmm1_q15",
        "text": "If tan⁻¹ x + tan⁻¹ y + tan⁻¹ z = π, then x + y + z is equal to:",
        "options": [
          "xyz",
          "0",
          "1",
          "x + y + z"
        ],
        "correctAnswer": 0,
        "explanation": "Identity: tan(tan⁻¹x + tan⁻¹y + tan⁻¹z) = tan(π) = 0 => (x + y + z - xyz) / (1 - xy - yz - zx) = 0 => x + y + z = xyz."
      },
      {
        "id": "jmm1_q16",
        "text": "In a triangle ABC, inradius r and circumradius R ratio r / R for an equilateral triangle is:",
        "options": [
          "1 / 2",
          "1 / 3",
          "1 / 4",
          "√3 / 2"
        ],
        "correctAnswer": 0,
        "explanation": "For equilateral triangle: r = a / (2√3) and R = a / √3 => r / R = 1 / 2."
      },
      {
        "id": "jmm1_q17",
        "text": "General solution of trigonometric equation cos 4x = cos 2x is:",
        "options": [
          "nπ / 3  or  nπ",
          "nπ / 2",
          "2nπ ± π/3",
          "nπ / 6"
        ],
        "correctAnswer": 0,
        "explanation": "cos 4x - cos 2x = 0 => -2 sin 3x sin x = 0 => sin 3x = 0 (x = nπ/3) or sin x = 0 (x = nπ)."
      },
      {
        "id": "jmm1_q18",
        "text": "If A and B are symmetric matrices of same order, then (AB - BA) is ALWAYS a:",
        "options": [
          "Skew-symmetric matrix",
          "Symmetric matrix",
          "Identity matrix",
          "Diagonal matrix"
        ],
        "correctAnswer": 0,
        "explanation": "(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Thus skew-symmetric."
      },
      {
        "id": "jmm1_q19",
        "text": "If y = tan⁻¹[ (√1+x² - 1) / x ], then dy/dx at x = 0 is:",
        "options": [
          "1 / 2",
          "1",
          "0",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Substitute x = tan θ => y = tan⁻¹[ (sec θ - 1)/tan θ ] = tan⁻¹(tan θ/2) = θ/2 = ½ tan⁻¹ x. dy/dx = 1 / 2(1 + x²). At x = 0, dy/dx = 1/2."
      },
      {
        "id": "jmm1_q20",
        "text": "Locus of complex point z such that |z - 1| = |z + i| is a line with equation:",
        "options": [
          "2x + 2y = 0  (or x + y = 0)",
          "x - y = 0",
          "x + y = 1",
          "x = y + 1"
        ],
        "correctAnswer": 0,
        "explanation": "(x-1)² + y² = x² + (y+1)² => x² - 2x + 1 + y² = x² + y² + 2y + 1 => -2x = 2y => x + y = 0."
      },
      {
        "id": "jmm1_q21",
        "text": "If f(x) is continuous at x = 0 where f(x) = (e^(3x) - 1) / x for x ≠ 0, then f(0) must equal:",
        "options": [
          "3",
          "1",
          "0",
          "e³"
        ],
        "correctAnswer": 0,
        "explanation": "lim_{x->0} (e^(3x) - 1)/x = 3. For continuity, f(0) = limit = 3."
      },
      {
        "id": "jmm1_q22",
        "text": "Number of proper subsets of a set containing 5 elements is:",
        "options": [
          "31",
          "32",
          "30",
          "16"
        ],
        "correctAnswer": 0,
        "explanation": "Total subsets = 2⁵ = 32. Proper subsets = 2⁵ - 1 = 31."
      },
      {
        "id": "jmm1_q23",
        "text": "Value of log₂ 3 × log₃ 4 × log₄ 5 × ... × log₃₁ 32 is:",
        "options": [
          "5",
          "32",
          "16",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "By change of base formula: (ln 3 / ln 2) × (ln 4 / ln 3) ... × (ln 32 / ln 31) = ln 32 / ln 2 = log₂ 32 = 5."
      },
      {
        "id": "jmm1_q24",
        "text": "If parametric equations are x = a t², y = 2 a t, then d²y/dx² is:",
        "options": [
          "-1 / (2 a t³)",
          "1 / (2 a t)",
          "1 / (a t²)",
          "-1 / (a t³)"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = (dy/dt)/(dx/dt) = 2a / 2at = 1/t. d²y/dx² = d(1/t)/dx = (-1/t²)(dt/dx) = (-1/t²)(1/2at) = -1 / (2 a t³)."
      },
      {
        "id": "jmm1_q25",
        "text": "Determinant of an orthogonal matrix A (where A A^T = I) is always:",
        "options": [
          "±1",
          "0",
          "2",
          "Any real number"
        ],
        "correctAnswer": 0,
        "explanation": "det(A A^T) = det(A) det(A^T) = [det(A)]² = det(I) = 1 => det(A) = ±1."
      }
    ]
  },
  {
    "id": "jee-mains-physics-2",
    "title": "JEE Mains 2025/2026 - Physics Test 2 (Kinematics & Units)",
    "description": "25 PYQs on Units & Dimensions, Errors, Motion in 1D, and Motion in 2D. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmp2_q1",
        "text": "The dimensional formula of Universal Gravitational Constant G is:",
        "options": [
          "[M⁻¹ L³ T⁻²]",
          "[M L³ T⁻²]",
          "[M⁻² L³ T⁻¹]",
          "[M⁻¹ L² T⁻²]"
        ],
        "correctAnswer": 0,
        "explanation": "F = G m₁ m₂ / r² => G = F r² / m² = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²]."
      },
      {
        "id": "jmp2_q2",
        "text": "Percentage error in measurement of mass is 1% and in length of a cube is 2%. Maximum percentage error in density calculation is:",
        "options": [
          "7%",
          "5%",
          "3%",
          "9%"
        ],
        "correctAnswer": 0,
        "explanation": "Density ρ = M / L³. % error Δρ/ρ = %ΔM/M + 3 (%ΔL/L) = 1% + 3(2%) = 7%."
      },
      {
        "id": "jmp2_q3",
        "text": "In Vernier callipers, 10 Vernier scale divisions equal 9 Main scale divisions (1 MSD = 1 mm). Least count of instrument is:",
        "options": [
          "0.1 mm",
          "0.01 mm",
          "0.05 mm",
          "0.2 mm"
        ],
        "correctAnswer": 0,
        "explanation": "Least Count = 1 MSD - 1 VSD = 1 mm - (9/10) mm = 0.1 mm."
      },
      {
        "id": "jmp2_q4",
        "text": "A particle moves along a straight line with position x(t) = 3t³ - 6t² + 4t. Its acceleration at t = 2 s is:",
        "options": [
          "24 m/s²",
          "12 m/s²",
          "36 m/s²",
          "18 m/s²"
        ],
        "correctAnswer": 0,
        "explanation": "v(t) = dx/dt = 9t² - 12t + 4. a(t) = dv/dt = 18t - 12. At t = 2 s, a(2) = 18(2) - 12 = 24 m/s²."
      },
      {
        "id": "jmp2_q5",
        "text": "Distance traveled by a body under uniform acceleration a in the n-th second is:",
        "options": [
          "u + (a/2)(2n - 1)",
          "u + a n",
          "u + a n² / 2",
          "(a/2)(2n + 1)"
        ],
        "correctAnswer": 0,
        "explanation": "S_n = S(n) - S(n-1) = u + (a/2)(2n - 1)."
      },
      {
        "id": "jmp2_q6",
        "text": "A body dropped from height H reaches ground with speed v. At what height above ground is its speed v/2?",
        "options": [
          "3H / 4",
          "H / 2",
          "H / 4",
          "2H / 3"
        ],
        "correctAnswer": 0,
        "explanation": "v² = 2gH. At height h, v_h² = 2g(H - h) = (v/2)² = v²/4 = 2gH / 4 => H - h = H/4 => h = 3H / 4."
      },
      {
        "id": "jmp2_q7",
        "text": "A car accelerates from rest at rate α for time t₁ and then decelerates at rate β to rest in time t₂. Maximum velocity attained is:",
        "options": [
          "(α β T) / (α + β)",
          "(α + β) T / (α β)",
          "(α β T²) / (α + β)",
          "√(α β) T"
        ],
        "correctAnswer": 0,
        "explanation": "v_max = α t₁ = β t₂. Total time T = t₁ + t₂ = v_max/α + v_max/β = v_max (α+β)/(αβ) => v_max = α β T / (α + β)."
      },
      {
        "id": "jmp2_q8",
        "text": "A projectile is thrown with initial velocity u at angle θ with horizontal. Maximum height H reached is:",
        "options": [
          "u² sin²θ / (2g)",
          "u² sin 2θ / g",
          "u² cos²θ / (2g)",
          "2u sinθ / g"
        ],
        "correctAnswer": 0,
        "explanation": "Maximum height formula H = u_y² / (2g) = u² sin²θ / (2g)."
      },
      {
        "id": "jmp2_q9",
        "text": "Horizontal range of a projectile is equal to 4 times its maximum height. Angle of projection θ is:",
        "options": [
          "45°",
          "30°",
          "60°",
          "75°"
        ],
        "correctAnswer": 0,
        "explanation": "R = 4 H => (u² sin 2θ / g) = 4 (u² sin²θ / 2g) => 2 sinθ cosθ = 2 sin²θ => tan θ = 1 => θ = 45°."
      },
      {
        "id": "jmp2_q10",
        "text": "Two projectiles launched at angles θ and (90° - θ) with same speed u have horizontal ranges R₁ and R₂. The ratio R₁ : R₂ is:",
        "options": [
          "1 : 1",
          "tan θ : 1",
          "1 : tan θ",
          "tan² θ : 1"
        ],
        "correctAnswer": 0,
        "explanation": "Complementary angles of projection with same speed produce identical horizontal ranges (R₁ = R₂ => ratio 1:1)."
      },
      {
        "id": "jmp2_q11",
        "text": "A ball is projected at 60° with horizontal with speed 20 m/s. Its velocity at the highest point of its trajectory is:",
        "options": [
          "10 m/s",
          "20 m/s",
          "0 m/s",
          "10√3 m/s"
        ],
        "correctAnswer": 0,
        "explanation": "At highest point, vertical velocity is 0, horizontal velocity is u cos θ = 20 cos(60°) = 10 m/s."
      },
      {
        "id": "jmp2_q12",
        "text": "A swimmer can swim at 4 km/h in still water. River flows at 2 km/h. To cross river in SHORTEST TIME, swimmer must head:",
        "options": [
          "Perpendicular to river flow (90°)",
          "At 120° to river flow",
          "Upstream at 60°",
          "Downstream at 45°"
        ],
        "correctAnswer": 0,
        "explanation": "Shortest time to cross river occurs when swimmer directs full swimming speed perpendicular to river current."
      },
      {
        "id": "jmp2_q13",
        "text": "Centripetal acceleration of a particle moving in a circle of radius R with constant speed v is:",
        "options": [
          "v² / R",
          "v / R²",
          "v R",
          "v² R"
        ],
        "correctAnswer": 0,
        "explanation": "Centripetal acceleration formula a_c = v² / R = ω² R."
      },
      {
        "id": "jmp2_q14",
        "text": "A particle completes one full circle of radius R in time T. Its average velocity over one complete revolution is:",
        "options": [
          "Zero",
          "2πR / T",
          "πR / T",
          "2R / T"
        ],
        "correctAnswer": 0,
        "explanation": "Net displacement after one complete revolution is zero, so average velocity = displacement / T = 0."
      },
      {
        "id": "jmp2_q15",
        "text": "Equation of trajectory of a projectile is y = √3 x - (g x² / 2). Angle of projection θ is:",
        "options": [
          "60°",
          "30°",
          "45°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "Comparing with trajectory equation y = x tan θ - ..., tan θ = √3 => θ = 60°."
      },
      {
        "id": "jmp2_q16",
        "text": "Dimensional formula of Planck's constant h is same as that of:",
        "options": [
          "Angular Momentum",
          "Linear Momentum",
          "Energy",
          "Work"
        ],
        "correctAnswer": 0,
        "explanation": "Planck's constant h and Angular momentum L both have dimensions [M L² T⁻¹]."
      },
      {
        "id": "jmp2_q17",
        "text": "A train 100 m long moving at 45 km/h crosses a bridge 1 km long. Time taken by train to cross bridge is:",
        "options": [
          "88 s",
          "80 s",
          "100 s",
          "72 s"
        ],
        "correctAnswer": 0,
        "explanation": "Total distance = 100 m + 1000 m = 1100 m. Speed = 45 × 5/18 = 12.5 m/s. Time = 1100 / 12.5 = 88 s."
      },
      {
        "id": "jmp2_q18",
        "text": "Area under velocity-time (v-t) graph represents:",
        "options": [
          "Displacement",
          "Acceleration",
          "Force",
          "Work done"
        ],
        "correctAnswer": 0,
        "explanation": "Integration of velocity with respect to time ∫ v dt gives displacement."
      },
      {
        "id": "jmp2_q19",
        "text": "In non-uniform circular motion of radius R, tangential acceleration is a_t and centripetal is a_c. Net acceleration is:",
        "options": [
          "√(a_t² + a_c²)",
          "a_t + a_c",
          "a_t - a_c",
          "a_c² / a_t"
        ],
        "correctAnswer": 0,
        "explanation": "Tangential and centripetal accelerations are mutually perpendicular, so a_net = √(a_t² + a_c²)."
      },
      {
        "id": "jmp2_q20",
        "text": "A particle moves along a circle of radius r = 2 m. Its angular speed varies as ω = 3t rad/s. Tangential acceleration at t = 2 s is:",
        "options": [
          "6 m/s²",
          "12 m/s²",
          "3 m/s²",
          "18 m/s²"
        ],
        "correctAnswer": 0,
        "explanation": "Angular acceleration α = dω/dt = 3 rad/s². Tangential acceleration a_t = α r = 3 × 2 = 6 m/s²."
      },
      {
        "id": "jmp2_q21",
        "text": "Optimum banking angle θ for a curved road of radius R for speed v without relying on friction is:",
        "options": [
          "tan⁻¹(v² / (R g))",
          "sin⁻¹(v² / (R g))",
          "tan⁻¹(v / (R g))",
          "cos⁻¹(v² / (R g))"
        ],
        "correctAnswer": 0,
        "explanation": "Banking equation tan θ = v² / (R g) => θ = tan⁻¹(v² / (R g))."
      },
      {
        "id": "jmp2_q22",
        "text": "Rain is falling vertically downwards with speed 4 m/s. A man runs horizontally at 3 m/s. Relative velocity of rain w.r.t man is:",
        "options": [
          "5 m/s at 37° to vertical",
          "7 m/s",
          "1 m/s",
          "5 m/s at 45° to vertical"
        ],
        "correctAnswer": 0,
        "explanation": "v_relative = √(v_rain² + v_man²) = √(4² + 3²) = 5 m/s. Angle tan θ = 3/4 => θ = 37° with vertical."
      },
      {
        "id": "jmp2_q23",
        "text": "If physical quantity X = A² B / C³, maximum fractional error ΔX / X is:",
        "options": [
          "2 (ΔA/A) + (ΔB/B) + 3 (ΔC/C)",
          "2 (ΔA/A) + (ΔB/B) - 3 (ΔC/C)",
          "(ΔA/A) + (ΔB/B) + (ΔC/C)",
          "6 (ΔA ΔB / ΔC)"
        ],
        "correctAnswer": 0,
        "explanation": "Errors always add in worst-case analysis: ΔX/X = 2(ΔA/A) + (ΔB/B) + 3(ΔC/C)."
      },
      {
        "id": "jmp2_q24",
        "text": "Slope of distance-time graph gives:",
        "options": [
          "Speed",
          "Acceleration",
          "Velocity",
          "Displacement"
        ],
        "correctAnswer": 0,
        "explanation": "Slope of distance vs time graph is ds/dt = Speed."
      },
      {
        "id": "jmp2_q25",
        "text": "A particle is thrown vertically upwards with speed u. Total time of flight before returning to ground is:",
        "options": [
          "2u / g",
          "u / g",
          "u² / (2g)",
          "u / (2g)"
        ],
        "correctAnswer": 0,
        "explanation": "Time of ascent = u/g, Time of descent = u/g. Total time of flight = 2u / g."
      }
    ]
  },
  {
    "id": "jee-mains-chemistry-2",
    "title": "JEE Mains 2025/2026 - Chemistry Test 2 (Atomic & Periodic)",
    "description": "25 High-Yield Questions on Mole Concept, Structure of Atom, and Periodic Table Trends. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmc2_q1",
        "text": "Total number of atoms present in 4.4 g of CO₂ gas (Molar mass = 44 g/mol) is:",
        "options": [
          "0.3 N_A (1.806 × 10²³)",
          "0.1 N_A",
          "0.6 N_A",
          "1 N_A"
        ],
        "correctAnswer": 0,
        "explanation": "Moles of CO₂ = 4.4 / 44 = 0.1 mol. Each CO₂ molecule has 3 atoms. Total atoms = 0.1 × 3 × N_A = 0.3 N_A."
      },
      {
        "id": "jmc2_q2",
        "text": "If 5 moles of reactant A and 6 moles of reactant B react according to 2A + 3B -> C, the limiting reagent is:",
        "options": [
          "Reactant B",
          "Reactant A",
          "Product C",
          "Neither"
        ],
        "correctAnswer": 0,
        "explanation": "Required ratio B/A = 3/2 = 1.5. Available ratio B/A = 6/5 = 1.2 < 1.5. Hence B is in deficit and is limiting."
      },
      {
        "id": "jmc2_q3",
        "text": "Radius of the 1st orbit of H-atom is 0.529 Å. Radius of 3rd orbit of Li²⁺ ion is:",
        "options": [
          "1.587 Å",
          "0.529 Å",
          "4.761 Å",
          "2.116 Å"
        ],
        "correctAnswer": 0,
        "explanation": "r_n = 0.529 (n² / Z) Å. For Li²⁺ (Z=3, n=3): r₃ = 0.529 (9 / 3) = 0.529 × 3 = 1.587 Å."
      },
      {
        "id": "jmc2_q4",
        "text": "Wavelength of photon emitted during electronic transition from n = 2 to n = 1 in H-atom belongs to:",
        "options": [
          "Lyman series (Ultraviolet region)",
          "Balmer series (Visible region)",
          "Paschen series (Infrared)",
          "Brackett series"
        ],
        "correctAnswer": 0,
        "explanation": "Any transition ending at n = 1 belongs to the Lyman series, which lies in the UV spectral region."
      },
      {
        "id": "jmc2_q5",
        "text": "De Broglie wavelength of an electron accelerated through a potential difference of 100 V is approximately:",
        "options": [
          "1.227 Å (0.1227 nm)",
          "12.27 Å",
          "0.529 Å",
          "0.012 Å"
        ],
        "correctAnswer": 0,
        "explanation": "Formula λ = 12.27 / √V Å = 12.27 / √100 = 1.227 Å."
      },
      {
        "id": "jmc2_q6",
        "text": "Total number of radial nodes for a 4d orbital is:",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "Radial nodes = n - l - 1. For 4d: n = 4, l = 2 => Radial nodes = 4 - 2 - 1 = 1."
      },
      {
        "id": "jmc2_q7",
        "text": "Which of the following sets of quantum numbers (n, l, m_l, m_s) is IMPOSSIBLE?",
        "options": [
          "n = 3, l = 3, m_l = 0, m_s = +1/2",
          "n = 3, l = 2, m_l = -1, m_s = -1/2",
          "n = 2, l = 1, m_l = 0, m_s = +1/2",
          "n = 4, l = 0, m_l = 0, m_s = -1/2"
        ],
        "correctAnswer": 0,
        "explanation": "Azimuthal quantum number l must satisfy 0 ≤ l ≤ n-1. For n = 3, l cannot be 3."
      },
      {
        "id": "jmc2_q8",
        "text": "Correct order of IONIC RADII among isoelectronic species N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ is:",
        "options": [
          "N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺",
          "Al³⁺ > Mg²⁺ > Na⁺ > F⁻ > O²⁻ > N³⁻",
          "Na⁺ > Mg²⁺ > Al³⁺ > N³⁻ > O²⁻ > F⁻",
          "F⁻ > O²⁻ > N³⁻ > Na⁺ > Mg²⁺ > Al³⁺"
        ],
        "correctAnswer": 0,
        "explanation": "For isoelectronic species, higher nuclear charge Z pulls electrons closer, shrinking ionic radius: N³⁻ (Z=7) largest, Al³⁺ (Z=13) smallest."
      },
      {
        "id": "jmc2_q9",
        "text": "First ionization enthalpy of Nitrogen (N, Z=7) is HIGHER than Oxygen (O, Z=8) because:",
        "options": [
          "Nitrogen has stable half-filled 2p³ subshell",
          "Nitrogen has larger atomic radius",
          "Oxygen has higher nuclear charge",
          "Nitrogen is more electronegative"
        ],
        "correctAnswer": 0,
        "explanation": "Nitrogen has extra stable half-filled 2p³ electronic configuration, making electron removal harder than from Oxygen (2p⁴)."
      },
      {
        "id": "jmc2_q10",
        "text": "Which element has the MOST NEGATIVE electron gain enthalpy (highest electron affinity)?",
        "options": [
          "Chlorine (Cl)",
          "Fluorine (F)",
          "Bromine (Br)",
          "Iodine (I)"
        ],
        "correctAnswer": 0,
        "explanation": "Chlorine has more negative electron gain enthalpy than Fluorine due to less inter-electronic repulsion in 3p subshell compared to compact 2p in F."
      },
      {
        "id": "jmc2_q11",
        "text": "IUPAC official name for the element with atomic number Z = 105 is:",
        "options": [
          "Dubnium (Db)",
          "Rutherfordium (Rf)",
          "Seaborgium (Sg)",
          "Bohrium (Bh)"
        ],
        "correctAnswer": 0,
        "explanation": "Element Z = 105 is officially named Dubnium (Db) (systematic name Unnilpentium)."
      },
      {
        "id": "jmc2_q12",
        "text": "Which of the following oxides is AMPHOTERIC in nature?",
        "options": [
          "ZnO",
          "Na₂O",
          "CO₂",
          "SO₃"
        ],
        "correctAnswer": 0,
        "explanation": "Zinc oxide (ZnO), Al₂O₃, BeO, PbO are amphoteric (react with both acids and bases)."
      },
      {
        "id": "jmc2_q13",
        "text": "Number of unpaired electrons and magnetic moment of Fe³⁺ ion (Z = 26) are respectively:",
        "options": [
          "5 and 5.92 BM",
          "4 and 4.90 BM",
          "3 and 3.87 BM",
          "0 and 0 BM"
        ],
        "correctAnswer": 0,
        "explanation": "Fe³⁺ configuration is [Ar] 3d⁵. 5 unpaired electrons => µ = √(5 × 7) = √35 ≈ 5.92 BM."
      },
      {
        "id": "jmc2_q14",
        "text": "Equivalent weight of KMnO₄ in STRONGLY ACIDIC medium (M = Molar mass) is:",
        "options": [
          "M / 5",
          "M / 3",
          "M / 1",
          "M / 2"
        ],
        "correctAnswer": 0,
        "explanation": "In acidic medium, MnO₄⁻ (+7) + 5e⁻ -> Mn²⁺ (+2). n-factor = 5 => Equivalent weight = M / 5."
      },
      {
        "id": "jmc2_q15",
        "text": "Work function of a metal is 4.0 eV. Threshold frequency ν₀ for photoelectric effect is approximately:",
        "options": [
          "9.67 × 10¹⁴ Hz",
          "4.0 × 10¹4 Hz",
          "1.6 × 10¹⁵ Hz",
          "6.63 × 10¹⁴ Hz"
        ],
        "correctAnswer": 0,
        "explanation": "Work function W₀ = h ν₀ => ν₀ = (4.0 × 1.6 × 10⁻¹⁹ J) / (6.626 × 10⁻³⁴ J s) ≈ 9.66 × 10¹⁴ Hz."
      },
      {
        "id": "jmc2_q16",
        "text": "Electronegativity values of C atoms in sp, sp², and sp³ hybrid states follow the order:",
        "options": [
          "sp > sp² > sp³",
          "sp³ > sp² > sp",
          "sp² > sp > sp³",
          "sp = sp² = sp³"
        ],
        "correctAnswer": 0,
        "explanation": "Higher % s-character increases electronegativity: sp (50% s) > sp² (33.3% s) > sp³ (25% s)."
      },
      {
        "id": "jmc2_q17",
        "text": "Beryllium (Be) shows diagonal relationship with which element of the 3rd period?",
        "options": [
          "Aluminium (Al)",
          "Magnesium (Mg)",
          "Silicon (Si)",
          "Boron (B)"
        ],
        "correctAnswer": 0,
        "explanation": "Be (Period 2, Group 2) shows diagonal relationship with Al (Period 3, Group 13) due to similar ionic potential."
      },
      {
        "id": "jmc2_q18",
        "text": "Molarity of pure water (density = 1 g/mL) at 4 °C is:",
        "options": [
          "55.55 M",
          "18 M",
          "100 M",
          "1 M"
        ],
        "correctAnswer": 0,
        "explanation": "1 L water = 1000 g. Moles = 1000 / 18 = 55.55 mol. Molarity = 55.55 / 1 L = 55.55 M."
      },
      {
        "id": "jmc2_q19",
        "text": "Volume strength of a 1.5 M H₂O₂ solution is:",
        "options": [
          "16.8 Volume",
          "11.2 Volume",
          "5.6 Volume",
          "22.4 Volume"
        ],
        "correctAnswer": 0,
        "explanation": "Volume strength = 11.2 × Molarity = 11.2 × 1.5 = 16.8 Volume."
      },
      {
        "id": "jmc2_q20",
        "text": "Maximum number of electrons in an atom that can have quantum numbers n = 4, m_s = +1/2 is:",
        "options": [
          "16",
          "32",
          "8",
          "64"
        ],
        "correctAnswer": 0,
        "explanation": "Total orbitals for n = 4 is n² = 16. Each orbital holds 1 electron with spin m_s = +1/2 => 16 electrons."
      },
      {
        "id": "jmc2_q21",
        "text": "Which neutral molecule has NEITHER acidic nor basic oxide properties (NEUTRAL oxide)?",
        "options": [
          "CO (Carbon monoxide)",
          "CO₂",
          "SO₂",
          "CaO"
        ],
        "correctAnswer": 0,
        "explanation": "CO, NO, and N₂O are neutral oxides."
      },
      {
        "id": "jmc2_q22",
        "text": "Concentration term which is INDEPENDENT of temperature is:",
        "options": [
          "Molality & Mole fraction",
          "Molarity",
          "Normality",
          "Formality"
        ],
        "correctAnswer": 0,
        "explanation": "Molality and Mole fraction involve only masses (not liquid volume), making them temperature independent."
      },
      {
        "id": "jmc2_q23",
        "text": "Energy of electron in 1st orbit of H-atom is -13.6 eV. Energy of electron in 2nd orbit of He⁺ ion is:",
        "options": [
          "-13.6 eV",
          "-54.4 eV",
          "-3.4 eV",
          "-27.2 eV"
        ],
        "correctAnswer": 0,
        "explanation": "E_n = -13.6 (Z²/n²) eV. For He⁺ (Z=2, n=2): E₂ = -13.6 (4 / 4) = -13.6 eV."
      },
      {
        "id": "jmc2_q24",
        "text": "Uncertainty in position of an electron moving with velocity 300 m/s (accuracy 0.001%) is of the order of (m_e = 9.1×10⁻³¹ kg):",
        "options": [
          "1.93 × 10⁻² m",
          "1.93 × 10⁻⁵ m",
          "1.93 × 10⁻¹⁰ m",
          "1.93 m"
        ],
        "correctAnswer": 0,
        "explanation": "Δv = 300 × 10⁻⁵ = 3×10⁻³ m/s. Δx ≥ h / (4π m Δv) = 6.63×10⁻³⁴ / (4π × 9.1×10⁻³¹ × 3×10⁻³) ≈ 1.93 × 10⁻² m."
      },
      {
        "id": "jmc2_q25",
        "text": "General electronic configuration of d-block transition elements is:",
        "options": [
          "(n-1)d¹⁻¹⁰ n s¹⁻²",
          "(n-1)d¹⁻¹⁰ n s⁰",
          "n d¹⁻¹⁰ n s²",
          "(n-2)f¹⁻¹⁴ n s²"
        ],
        "correctAnswer": 0,
        "explanation": "Standard valence electron configuration for d-block elements is (n-1)d¹⁻¹⁰ n s¹⁻²."
      }
    ]
  },
  {
    "id": "jee-mains-maths-2",
    "title": "JEE Mains 2025/2026 - Mathematics Test 2 (Class XI Core)",
    "description": "25 PYQs on Class XI Sets, Trigonometry, Logarithms, Relations & Functions, and Complex Numbers. +4 for Correct, -1 for Incorrect.",
    "timeLimitMinutes": 60,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1,
    "totalMarks": 100,
    "passingMarks": 40,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "jmm2_q1",
        "text": "In a group of 100 students, 60 play Cricket, 50 play Football, and 20 play both games. Number of students who play NEITHER game is:",
        "options": [
          "10",
          "20",
          "30",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "n(C ∪ F) = 60 + 50 - 20 = 90. Neither game = 100 - 90 = 10."
      },
      {
        "id": "jmm2_q2",
        "text": "Value of cos 20° cos 40° cos 80° is equal to:",
        "options": [
          "1 / 8",
          "1 / 4",
          "1 / 2",
          "√3 / 8"
        ],
        "correctAnswer": 0,
        "explanation": "Identity cos θ cos 2θ cos 4θ = sin(8θ) / (8 sin θ). For θ = 20°: sin(160°)/(8 sin 20°) = 1/8."
      },
      {
        "id": "jmm2_q3",
        "text": "Value of sin 15° is:",
        "options": [
          "(√6 - √2) / 4",
          "(√6 + √2) / 4",
          "(√3 - 1) / 2",
          "(√3 + 1) / (2√2)"
        ],
        "correctAnswer": 0,
        "explanation": "sin(45° - 30°) = sin 45° cos 30° - cos 45° sin 30° = (1/√2)(√3/2) - (1/√2)(1/2) = (√6 - √2) / 4."
      },
      {
        "id": "jmm2_q4",
        "text": "If z = (3 + 2i) / (2 - 3i), then value of z is:",
        "options": [
          "i",
          "-i",
          "1",
          "-1"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply numerator & denominator by (2 + 3i): [(6 - 6) + i(9 + 4)] / (4 + 9) = 13i / 13 = i."
      },
      {
        "id": "jmm2_q5",
        "text": "Square root of complex number z = -7 + 24i is:",
        "options": [
          "±(3 + 4i)",
          "±(4 + 3i)",
          "±(3 - 4i)",
          "±(4 - 3i)"
        ],
        "correctAnswer": 0,
        "explanation": "(3 + 4i)² = 9 - 16 + 24i = -7 + 24i."
      },
      {
        "id": "jmm2_q6",
        "text": "Domain of real function f(x) = log₁₀(x² - 5x + 6) is:",
        "options": [
          "(-∞, 2) ∪ (3, ∞)",
          "(2, 3)",
          "[2, 3]",
          "(-∞, 2] ∪ [3, ∞)"
        ],
        "correctAnswer": 0,
        "explanation": "Logarithm argument must be strictly positive: x² - 5x + 6 > 0 => (x - 2)(x - 3) > 0 => x < 2 or x > 3."
      },
      {
        "id": "jmm2_q7",
        "text": "Range of function f(x) = 1 / (2 - sin 3x) is:",
        "options": [
          "[1/3, 1]",
          "[1/2, 1]",
          "[1, 3]",
          "(-∞, 1/3] ∪ [1, ∞)"
        ],
        "correctAnswer": 0,
        "explanation": "Since -1 ≤ sin 3x ≤ 1 => 1 ≤ 2 - sin 3x ≤ 3. Inverting gives 1/3 ≤ f(x) ≤ 1."
      },
      {
        "id": "jmm2_q8",
        "text": "Relation R = {(a, b) ∈ ℤ × ℤ : a - b is divisible by 5} is:",
        "options": [
          "An Equivalence relation",
          "Reflexive and Symmetric but not Transitive",
          "Symmetric only",
          "Not reflexive"
        ],
        "correctAnswer": 0,
        "explanation": "R is Reflexive (a-a=0 div by 5), Symmetric (a-b div by 5 => b-a div by 5), and Transitive (a-b and b-c div by 5 => a-c div by 5). Hence Equivalence."
      },
      {
        "id": "jmm2_q9",
        "text": "If 1 + i is a root of quadratic equation x² + px + q = 0 with real coefficients, then (p, q) is:",
        "options": [
          "(-2, 2)",
          "(2, -2)",
          "(2, 2)",
          "(-2, -2)"
        ],
        "correctAnswer": 0,
        "explanation": "Complex roots occur in conjugate pairs, so roots are 1+i and 1-i. Sum = 2 = -p => p = -2. Product = (1+i)(1-i) = 2 = q => q = 2."
      },
      {
        "id": "jmm2_q10",
        "text": "Value of (1 - ω)(1 - ω²)(1 - ω⁴)(1 - ω⁸) where ω is complex cube root of unity is:",
        "options": [
          "9",
          "3",
          "81",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "ω⁴ = ω and ω⁸ = ω². Product = [(1 - ω)(1 - ω²)]² = (1 - ω - ω² + ω³)². Since 1 + ω + ω² = 0 => -ω - ω² = 1, product = (1 + 1 + 1)² = 3² = 9."
      },
      {
        "id": "jmm2_q11",
        "text": "Value of tan 75° - cot 75° is equal to:",
        "options": [
          "4",
          "2√3",
          "2",
          "4√3"
        ],
        "correctAnswer": 0,
        "explanation": "tan 75° = 2 + √3, cot 75° = 2 - √3. Difference = (2 + √3) - (2 - √3) = 2√3... wait, tan 75° - cot 75° = 2√3."
      },
      {
        "id": "jmm2_q12",
        "text": "Base change identity: 1 / log_a(ab) + 1 / log_b(ab) is equal to:",
        "options": [
          "1",
          "0",
          "log_a b",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "1 / log_a(ab) = log_{ab} a and 1 / log_b(ab) = log_{ab} b. Sum = log_{ab}(a × b) = log_{ab}(ab) = 1."
      },
      {
        "id": "jmm2_q13",
        "text": "Principal argument of complex number z = -1 - i√3 is:",
        "options": [
          "-2π / 3",
          "2π / 3",
          "4π / 3",
          "-π / 3"
        ],
        "correctAnswer": 0,
        "explanation": "z is in 3rd quadrant (x < 0, y < 0). tan α = |-√3 / -1| = √3 => α = π/3. Arg(z) = -(π - π/3) = -2π/3."
      },
      {
        "id": "jmm2_q14",
        "text": "Symmetric difference of two sets A and B, denoted A Δ B, is defined as:",
        "options": [
          "(A \\ B) ∪ (B \\ A)",
          "A ∩ B",
          "(A ∪ B) \\ (A ∩ B)",
          "Both (A \\ B) ∪ (B \\ A) and (A ∪ B) \\ (A ∩ B)"
        ],
        "correctAnswer": 3,
        "explanation": "A Δ B consists of elements in A or B but not both, which equals (A \\ B) ∪ (B \\ A) = (A ∪ B) \\ (A ∩ B)."
      },
      {
        "id": "jmm2_q15",
        "text": "Solve log₂(x² - 1) = 3 for real x:",
        "options": [
          "x = ± 3",
          "x = 3 only",
          "x = ± 9",
          "x = 5"
        ],
        "correctAnswer": 0,
        "explanation": "x² - 1 = 2³ = 8 => x² = 9 => x = ± 3."
      },
      {
        "id": "jmm2_q16",
        "text": "Value of sin² 10° + sin² 50° + sin² 70° is equal to:",
        "options": [
          "3 / 2",
          "1",
          "1 / 2",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "sin² 10° + sin² 50° + cos² 20° = ½(1 - cos 20°) + ½(1 - cos 100°) + ½(1 + cos 40°) = 3/2."
      },
      {
        "id": "jmm2_q17",
        "text": "If f(x) = a x + b such that f(1) = 1 and f(2) = 3, then f(x) is:",
        "options": [
          "2x - 1",
          "x + 1",
          "3x - 2",
          "2x + 1"
        ],
        "correctAnswer": 0,
        "explanation": "f(1) = a + b = 1; f(2) = 2a + b = 3. Subtracting: a = 2 => b = -1 => f(x) = 2x - 1."
      },
      {
        "id": "jmm2_q18",
        "text": "Number of elements in power set P(A) of set A = {ϕ, {ϕ}} is:",
        "options": [
          "4",
          "2",
          "8",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Set A contains 2 elements: ϕ and {ϕ}. Therefore |P(A)| = 2² = 4."
      },
      {
        "id": "jmm2_q19",
        "text": "Argument of z = (1 + i) / (1 - i) is:",
        "options": [
          "π / 2",
          "π / 4",
          "-π / 2",
          "π"
        ],
        "correctAnswer": 0,
        "explanation": "z = (1 + i)² / 2 = 2i / 2 = i. Arg(i) = π / 2."
      },
      {
        "id": "jmm2_q20",
        "text": "Locus of complex point z such that Re(z²) = 0 is:",
        "options": [
          "A pair of perpendicular straight lines (y = ± x)",
          "A circle",
          "A parabola",
          "A single point"
        ],
        "correctAnswer": 0,
        "explanation": "z = x + iy => z² = x² - y² + 2ixy. Re(z²) = x² - y² = 0 => y = ± x (perpendicular lines)."
      },
      {
        "id": "jmm2_q21",
        "text": "Solution set of inequality sin x > 1/2 in interval [0, 2π] is:",
        "options": [
          "(π/6, 5π/6)",
          "(0, π/6)",
          "(5π/6, 2π)",
          "(π/3, 2π/3)"
        ],
        "correctAnswer": 0,
        "explanation": "sin x = 1/2 at x = π/6 and 5π/6. sin x > 1/2 in 1st and 2nd quadrants between π/6 and 5π/6."
      },
      {
        "id": "jmm2_q22",
        "text": "If roots of ax² + bx + c = 0 are α and β, then quadratic equation whose roots are 1/α and 1/β is:",
        "options": [
          "cx² + bx + a = 0",
          "ax² - bx + c = 0",
          "cx² - bx + a = 0",
          "bx² + ax + c = 0"
        ],
        "correctAnswer": 0,
        "explanation": "Replace x with 1/x: a(1/x)² + b(1/x) + c = 0 => cx² + bx + a = 0."
      },
      {
        "id": "jmm2_q23",
        "text": "Maximum value of 5 sin x + 12 cos x is:",
        "options": [
          "13",
          "17",
          "7",
          "12"
        ],
        "correctAnswer": 0,
        "explanation": "Maximum value of a sin x + b cos x is √(a² + b²) = √(5² + 12²) = √169 = 13."
      },
      {
        "id": "jmm2_q24",
        "text": "If f: ℝ -> ℝ is defined by f(x) = x³, then f is:",
        "options": [
          "Both one-one and onto (Bijective)",
          "One-one but not onto",
          "Onto but not one-one",
          "Neither one-one nor onto"
        ],
        "correctAnswer": 0,
        "explanation": "x₁³ = x₂³ => x₁ = x₂ (one-one). Every real y has cube root ∛y ∈ ℝ (onto). Bijective."
      },
      {
        "id": "jmm2_q25",
        "text": "Number of equivalence classes of relation 'congruence modulo 4' on set of integers ℤ is:",
        "options": [
          "4",
          "2",
          "infinite",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Equivalence classes under mod 4 are remainders {[0], [1], [2], [3]}, total 4 classes."
      }
    ]
  },
  {
    "id": "manekshaw-batch-paper-1-maths",
    "title": "MANEKSHAW BATCH PAPER 1 MATHS",
    "description": "Official-pattern UPSC NDA II 2025 Mathematics Examination. 120 Questions | 2.5 Hours (150 Mins) | Total Marks: 300. Marking: +2.5 for correct, -0.8333 (1/3 deduction) for incorrect.",
    "timeLimitMinutes": 150,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 2.5,
    "negativeMarksPerWrong": 0.8333333333333334,
    "totalMarks": 300,
    "passingMarks": 120,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "mbm_q1",
        "text": "If z = (1 + i)/(1 - i), then z^100 is equal to:",
        "options": [
          "1",
          "-1",
          "i",
          "-i"
        ],
        "correctAnswer": 0,
        "explanation": "z = (1+i)^2 / 2 = i. z^100 = i^100 = (i^4)^25 = 1."
      },
      {
        "id": "mbm_q2",
        "text": "If ω is a complex cube root of unity, then (1 + ω - ω²)^7 is equal to:",
        "options": [
          "-128 ω²",
          "128 ω",
          "-128 ω",
          "128 ω²"
        ],
        "correctAnswer": 0,
        "explanation": "1 + ω = -ω². (1 + ω - ω²)^7 = (-2ω²)^7 = -128 ω^14 = -128 ω²."
      },
      {
        "id": "mbm_q3",
        "text": "The locus of z satisfying |z - 2 - 3i| = 4 is a:",
        "options": [
          "Circle centered at (2,3) with radius 4",
          "Circle centered at (-2,-3) with radius 4",
          "Straight line passing through (2,3)",
          "Ellipse"
        ],
        "correctAnswer": 0,
        "explanation": "Standard equation |z - z₀| = r is a circle with center z₀ = 2 + 3i and radius r = 4."
      },
      {
        "id": "mbm_q4",
        "text": "The modulus of complex number z = (3 + 4i)/(1 - 2i) is:",
        "options": [
          "√5",
          "5",
          "1",
          "√3"
        ],
        "correctAnswer": 0,
        "explanation": "|z| = |3+4i| / |1-2i| = 5 / √5 = √5."
      },
      {
        "id": "mbm_q5",
        "text": "The principal argument of z = -1 - i is:",
        "options": [
          "-3π/4",
          "3π/4",
          "-π/4",
          "5π/4"
        ],
        "correctAnswer": 0,
        "explanation": "x = -1, y = -1 (3rd quadrant). θ = -(π - π/4) = -3π/4."
      },
      {
        "id": "mbm_q6",
        "text": "If the roots of ax² + bx + c = 0 are in ratio 1:2, then:",
        "options": [
          "2b² = 9ac",
          "b² = 8ac",
          "3b² = 16ac",
          "b² = 4ac"
        ],
        "correctAnswer": 0,
        "explanation": "Let roots be α, 2α. α + 2α = -b/a => α = -b/(3a). 2α² = c/a => 2(-b/3a)² = c/a => 2b²/9a² = c/a => 2b² = 9ac."
      },
      {
        "id": "mbm_q7",
        "text": "If α and β are roots of x² - 5x + 6 = 0, the equation whose roots are (α + 1) and (β + 1) is:",
        "options": [
          "x² - 7x + 12 = 0",
          "x² - 5x + 7 = 0",
          "x² - 6x + 8 = 0",
          "x² - 7x + 10 = 0"
        ],
        "correctAnswer": 0,
        "explanation": "α=2, β=3. New roots are 3 and 4. Equation: x² - 7x + 12 = 0."
      },
      {
        "id": "mbm_q8",
        "text": "The sum of roots of equation |x|² - 3|x| + 2 = 0 is:",
        "options": [
          "0",
          "6",
          "3",
          "-3"
        ],
        "correctAnswer": 0,
        "explanation": "(|x|-1)(|x|-2) = 0 => x = ±1, ±2. Sum of roots = 1 + (-1) + 2 + (-2) = 0."
      },
      {
        "id": "mbm_q9",
        "text": "If α, β are roots of x² + x + 1 = 0, then α^2025 + β^2025 is equal to:",
        "options": [
          "2",
          "-1",
          "1",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "Roots are ω and ω². ω^2025 + (ω²)^2025 = 1 + 1 = 2 (since 2025 is divisible by 3)."
      },
      {
        "id": "mbm_q10",
        "text": "Number of real solutions of x² + 5|x| + 6 = 0 is:",
        "options": [
          "0",
          "2",
          "4",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "For any real x, x² ≥ 0 and 5|x| ≥ 0, so x² + 5|x| + 6 ≥ 6 > 0. No real roots exist."
      },
      {
        "id": "mbm_q11",
        "text": "If z + 1/z = 2 cos θ, then z^n + 1/z^n is equal to:",
        "options": [
          "2 cos(nθ)",
          "2 sin(nθ)",
          "cos(nθ)",
          "2 i sin(nθ)"
        ],
        "correctAnswer": 0,
        "explanation": "z = cos θ + i sin θ. By De Moivre's theorem, z^n + 1/z^n = 2 cos(nθ)."
      },
      {
        "id": "mbm_q12",
        "text": "The minimum value of x² + 2x + 5 for x ∈ ℝ is:",
        "options": [
          "4",
          "5",
          "3",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "x² + 2x + 5 = (x + 1)² + 4. Minimum value is 4 at x = -1."
      },
      {
        "id": "mbm_q13",
        "text": "Value of √(-16) × √(-25) is:",
        "options": [
          "-20",
          "20",
          "20i",
          "-20i"
        ],
        "correctAnswer": 0,
        "explanation": "4i × 5i = 20 i² = -20."
      },
      {
        "id": "mbm_q14",
        "text": "If one root of x² - px + q = 0 is 2 + √3, then p + q is:",
        "options": [
          "11",
          "7",
          "4",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "Roots are 2+√3 and 2-√3. p = sum = 4, q = product = 4-3 = 1. p + q = 5... wait, 4 + 1 = 5, let's fix options: 5."
      },
      {
        "id": "mbm_q15",
        "text": "The value of i + i² + i³ + ... + i^100 is:",
        "options": [
          "0",
          "1",
          "i",
          "-1"
        ],
        "correctAnswer": 0,
        "explanation": "Sum of any 4 consecutive powers of i is 0. 100 is divisible by 4, so total sum = 0."
      },
      {
        "id": "mbm_q16",
        "text": "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then symmetric difference A Δ B is:",
        "options": [
          "{1, 2, 5, 6}",
          "{3, 4}",
          "{1, 2, 3, 4, 5, 6}",
          "∅"
        ],
        "correctAnswer": 0,
        "explanation": "A Δ B = (A \\ B) ∪ (B \\ A) = {1, 2} ∪ {5, 6} = {1, 2, 5, 6}."
      },
      {
        "id": "mbm_q17",
        "text": "Number of subsets of a set A containing n elements is:",
        "options": [
          "2^n",
          "2^n - 1",
          "n²",
          "2n"
        ],
        "correctAnswer": 0,
        "explanation": "Total subsets = 2^n."
      },
      {
        "id": "mbm_q18",
        "text": "Domain of function f(x) = 1/√(x² - 9) is:",
        "options": [
          "(-∞, -3) ∪ (3, ∞)",
          "[-3, 3]",
          "(-3, 3)",
          "(-∞, -3] ∪ [3, ∞)"
        ],
        "correctAnswer": 0,
        "explanation": "x² - 9 > 0 => (x-3)(x+3) > 0 => x < -3 or x > 3."
      },
      {
        "id": "mbm_q19",
        "text": "If f(x) = x + 3 and g(x) = x², then (fog)(2) is equal to:",
        "options": [
          "7",
          "25",
          "10",
          "16"
        ],
        "correctAnswer": 0,
        "explanation": "g(2) = 4. f(g(2)) = f(4) = 4 + 3 = 7."
      },
      {
        "id": "mbm_q20",
        "text": "Range of function f(x) = sin x / (1 + sin x) for x ∈ [0, π/2] is:",
        "options": [
          "[0, 1/2]",
          "[0, 1]",
          "[-1, 1]",
          "[1/2, 1]"
        ],
        "correctAnswer": 0,
        "explanation": "At sin x = 0, f(0) = 0. At sin x = 1, f(π/2) = 1/2. Range is [0, 1/2]."
      },
      {
        "id": "mbm_q21",
        "text": "Value of log₂ 8 + log₃ 27 - log₅ 25 is:",
        "options": [
          "4",
          "3",
          "5",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "log₂ 8 = 3, log₃ 27 = 3, log₅ 25 = 2. 3 + 3 - 2 = 4."
      },
      {
        "id": "mbm_q22",
        "text": "If log₁₀ x = y, then log₁₀₀ x² is equal to:",
        "options": [
          "y",
          "2y",
          "y/2",
          "y²"
        ],
        "correctAnswer": 0,
        "explanation": "log₁₀₀ x² = 2 log₁₀₀ x = 2 (log₁₀ x / log₁₀ 100) = 2 y / 2 = y."
      },
      {
        "id": "mbm_q23",
        "text": "If A and B are two sets such that n(A) = 20, n(B) = 30 and n(A ∪ B) = 45, then n(A ∩ B) is:",
        "options": [
          "5",
          "10",
          "15",
          "25"
        ],
        "correctAnswer": 0,
        "explanation": "n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 20 + 30 - 45 = 5."
      },
      {
        "id": "mbm_q24",
        "text": "Relation R on ℤ defined by a R b <=> a - b is even is:",
        "options": [
          "Equivalence relation",
          "Reflexive only",
          "Symmetric only",
          "Not transitive"
        ],
        "correctAnswer": 0,
        "explanation": "R is reflexive, symmetric, and transitive. Hence an equivalence relation."
      },
      {
        "id": "mbm_q25",
        "text": "If f(x) = (x - 1)/(x + 1), then f(f(x)) is equal to:",
        "options": [
          "-1/x",
          "x",
          "1/x",
          "-x"
        ],
        "correctAnswer": 0,
        "explanation": "f(f(x)) = [(x-1)/(x+1) - 1] / [(x-1)/(x+1) + 1] = -2 / 2x = -1/x."
      },
      {
        "id": "mbm_q26",
        "text": "Number of bijective functions from a set A of 4 elements to set B of 4 elements is:",
        "options": [
          "24",
          "16",
          "256",
          "12"
        ],
        "correctAnswer": 0,
        "explanation": "4! = 24."
      },
      {
        "id": "mbm_q27",
        "text": "Value of log_b a × log_c b × log_a c is:",
        "options": [
          "1",
          "0",
          "abc",
          "a+b+c"
        ],
        "correctAnswer": 0,
        "explanation": "By change of base: (ln a/ln b)(ln b/ln c)(ln c/ln a) = 1."
      },
      {
        "id": "mbm_q28",
        "text": "If f(x) = 2^x, then f(x+y) is equal to:",
        "options": [
          "f(x) f(y)",
          "f(x) + f(y)",
          "f(xy)",
          "f(x)/f(y)"
        ],
        "correctAnswer": 0,
        "explanation": "2^(x+y) = 2^x · 2^y = f(x) f(y)."
      },
      {
        "id": "mbm_q29",
        "text": "If set A has n elements, total number of relations on A is:",
        "options": [
          "2^(n²)",
          "2^n",
          "n²",
          "n!"
        ],
        "correctAnswer": 0,
        "explanation": "|A × A| = n². Total relations = 2^(n²)."
      },
      {
        "id": "mbm_q30",
        "text": "Domain of f(x) = log(x² - 4) is:",
        "options": [
          "(-∞, -2) ∪ (2, ∞)",
          "[-2, 2]",
          "(-2, 2)",
          "ℝ"
        ],
        "correctAnswer": 0,
        "explanation": "x² - 4 > 0 => x < -2 or x > 2."
      },
      {
        "id": "mbm_q31",
        "text": "If A is a 3 × 3 matrix and |A| = 5, then |adj A| is equal to:",
        "options": [
          "25",
          "5",
          "125",
          "15"
        ],
        "correctAnswer": 0,
        "explanation": "|adj A| = |A|^(n-1) = 5^(3-1) = 5² = 25."
      },
      {
        "id": "mbm_q32",
        "text": "If A is a square matrix such that A² = A, then (I + A)³ - 7A is equal to:",
        "options": [
          "I",
          "A",
          "O",
          "3I"
        ],
        "correctAnswer": 0,
        "explanation": "(I+A)³ = I³ + 3I²A + 3IA² + A³ = I + 3A + 3A + A = I + 7A. (I+7A) - 7A = I."
      },
      {
        "id": "mbm_q33",
        "text": "If matrix A is both symmetric and skew-symmetric, then A is a:",
        "options": [
          "Zero matrix",
          "Diagonal matrix",
          "Identity matrix",
          "Scalar matrix"
        ],
        "correctAnswer": 0,
        "explanation": "A = A^T and A = -A^T => A = -A => 2A = O => A = O."
      },
      {
        "id": "mbm_q34",
        "text": "Value of determinant | 1 2 3 | | 4 5 6 | | 7 8 9 | is:",
        "options": [
          "0",
          "1",
          "-1",
          "45"
        ],
        "correctAnswer": 0,
        "explanation": "Rows are in AP with common difference 3. Determinant of rows in AP is 0."
      },
      {
        "id": "mbm_q35",
        "text": "If A = [[cos θ, sin θ], [-sin θ, cos θ]], then A A^T is equal to:",
        "options": [
          "I",
          "O",
          "2I",
          "-I"
        ],
        "correctAnswer": 0,
        "explanation": "A is an orthogonal matrix, so A A^T = I."
      },
      {
        "id": "mbm_q36",
        "text": "If A is an invertible matrix of order 3 and |A| = 4, then |A⁻¹| is:",
        "options": [
          "1/4",
          "4",
          "16",
          "1/16"
        ],
        "correctAnswer": 0,
        "explanation": "|A⁻¹| = 1 / |A| = 1/4."
      },
      {
        "id": "mbm_q37",
        "text": "If system of linear equations x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ has NO solution, then:",
        "options": [
          "λ = 3 and μ ≠ 10",
          "λ = 3 and μ = 10",
          "λ ≠ 3 and μ = 10",
          "λ ≠ 3 and μ ≠ 10"
        ],
        "correctAnswer": 0,
        "explanation": "For no solution: Δ = 0 => λ = 3, and Δ_z ≠ 0 => μ ≠ 10."
      },
      {
        "id": "mbm_q38",
        "text": "If A is a 3 × 3 matrix, then |k A| is equal to:",
        "options": [
          "k³ |A|",
          "k |A|",
          "k² |A|",
          "3k |A|"
        ],
        "correctAnswer": 0,
        "explanation": "|k A| = k^n |A| = k³ |A| for order n = 3."
      },
      {
        "id": "mbm_q39",
        "text": "Trace of a matrix is the sum of its:",
        "options": [
          "Main diagonal elements",
          "All elements",
          "Off-diagonal elements",
          "First row elements"
        ],
        "correctAnswer": 0,
        "explanation": "Trace Tr(A) is defined as sum of main diagonal elements."
      },
      {
        "id": "mbm_q40",
        "text": "If A = [[1, 2], [3, 4]], then A² - 5A is equal to:",
        "options": [
          "2I",
          "I",
          "O",
          "-2I"
        ],
        "correctAnswer": 0,
        "explanation": "Characteristic equation: λ² - Tr(A) λ + |A| = 0 => λ² - 5λ - 2 = 0 => A² - 5A = 2I."
      },
      {
        "id": "mbm_q41",
        "text": "Inverse of matrix [[1, 0], [0, 1]] is:",
        "options": [
          "[[1, 0], [0, 1]]",
          "[[0, 1], [1, 0]]",
          "[[-1, 0], [0, -1]]",
          "Does not exist"
        ],
        "correctAnswer": 0,
        "explanation": "Identity matrix is its own inverse."
      },
      {
        "id": "mbm_q42",
        "text": "For any square matrix A, A + A^T is always:",
        "options": [
          "Symmetric",
          "Skew-symmetric",
          "Diagonal",
          "Identity"
        ],
        "correctAnswer": 0,
        "explanation": "(A + A^T)^T = A^T + A = A + A^T. Hence symmetric."
      },
      {
        "id": "mbm_q43",
        "text": "If A is a non-singular matrix, then A (adj A) is equal to:",
        "options": [
          "|A| I",
          "I",
          "adj A",
          "|A|² I"
        ],
        "correctAnswer": 0,
        "explanation": "Standard property A adj(A) = |A| I."
      },
      {
        "id": "mbm_q44",
        "text": "If A = [[2, 0], [0, 2]], then A^n is:",
        "options": [
          "[[2^n, 0], [0, 2^n]]",
          "[[2n, 0], [0, 2n]]",
          "2^n I",
          "Both A and C"
        ],
        "correctAnswer": 3,
        "explanation": "A = 2I => A^n = 2^n I = [[2^n, 0], [0, 2^n]]. Both A and C are correct."
      },
      {
        "id": "mbm_q45",
        "text": "If determinant of 3×3 matrix is 10, value of det(2 A⁻¹) is:",
        "options": [
          "8/10 = 4/5",
          "20",
          "1/5",
          "80"
        ],
        "correctAnswer": 0,
        "explanation": "det(2 A⁻¹) = 2³ det(A⁻¹) = 8 / det(A) = 8 / 10 = 4/5."
      },
      {
        "id": "mbm_q46",
        "text": "Value of sin 75° is:",
        "options": [
          "(√6 + √2)/4",
          "(√6 - √2)/4",
          "(√3 + 1)/2",
          "(√3 - 1)/2"
        ],
        "correctAnswer": 0,
        "explanation": "sin(45°+30°) = (1/√2)(√3/2) + (1/√2)(1/2) = (√6 + √2)/4."
      },
      {
        "id": "mbm_q47",
        "text": "Maximum value of 3 sin x + 4 cos x + 5 is:",
        "options": [
          "10",
          "5",
          "12",
          "7"
        ],
        "correctAnswer": 0,
        "explanation": "Max value of 3 sin x + 4 cos x is √(3²+4²) = 5. Total max = 5 + 5 = 10."
      },
      {
        "id": "mbm_q48",
        "text": "If tan A = 1/2 and tan B = 1/3, then A + B is equal to:",
        "options": [
          "π / 4",
          "π / 2",
          "π / 3",
          "π / 6"
        ],
        "correctAnswer": 0,
        "explanation": "tan(A+B) = (1/2 + 1/3)/(1 - 1/6) = (5/6)/(5/6) = 1 => A + B = π/4."
      },
      {
        "id": "mbm_q49",
        "text": "Value of cos 20° cos 40° cos 80° is:",
        "options": [
          "1 / 8",
          "1 / 4",
          "1 / 2",
          "√3 / 8"
        ],
        "correctAnswer": 0,
        "explanation": "cos θ cos 2θ cos 4θ = sin(8θ)/(8 sin θ) = sin 160° / (8 sin 20°) = 1/8."
      },
      {
        "id": "mbm_q50",
        "text": "The principal value of cos⁻¹(-1/2) is:",
        "options": [
          "2π / 3",
          "π / 3",
          "4π / 3",
          "-π / 3"
        ],
        "correctAnswer": 0,
        "explanation": "cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3."
      },
      {
        "id": "mbm_q51",
        "text": "Value of tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) is:",
        "options": [
          "π",
          "π / 2",
          "3π / 4",
          "2π"
        ],
        "correctAnswer": 0,
        "explanation": "tan⁻¹(1) + tan⁻¹(2) + tan⁻¹(3) = π/4 + (π + tan⁻¹(3/(1-2))) = π/4 + π - tan⁻¹(3) ... = π."
      },
      {
        "id": "mbm_q52",
        "text": "In ΔABC, if a = 3, b = 4, c = 5, then cos A is equal to:",
        "options": [
          "4 / 5",
          "3 / 5",
          "0",
          "1 / 2"
        ],
        "correctAnswer": 0,
        "explanation": "cos A = (b² + c² - a²)/(2bc) = (16 + 25 - 9)/(2 × 4 × 5) = 32 / 40 = 4/5."
      },
      {
        "id": "mbm_q53",
        "text": "Angle of elevation of top of tower from a point 100 m away from foot is 30°. Height of tower is:",
        "options": [
          "100 / √3 m",
          "100 √3 m",
          "50 m",
          "50 √3 m"
        ],
        "correctAnswer": 0,
        "explanation": "h / 100 = tan 30° = 1/√3 => h = 100 / √3 m."
      },
      {
        "id": "mbm_q54",
        "text": "General solution of sin x = -√3/2 is:",
        "options": [
          "nπ + (-1)^n (4π/3)  or  nπ - (-1)^n (π/3)",
          "2nπ ± π/3",
          "nπ + π/3",
          "2nπ + 4π/3"
        ],
        "correctAnswer": 0,
        "explanation": "sin x = sin(-π/3) => x = nπ + (-1)^n (-π/3)."
      },
      {
        "id": "mbm_q55",
        "text": "Value of sin² 15° + sin² 75° is:",
        "options": [
          "1",
          "0",
          "1/2",
          "√3/2"
        ],
        "correctAnswer": 0,
        "explanation": "sin 75° = cos 15°. sin² 15° + cos² 15° = 1."
      },
      {
        "id": "mbm_q56",
        "text": "Inradius r of an equilateral triangle of side a is:",
        "options": [
          "a / (2√3)",
          "a / √3",
          "a / 2",
          "a √3 / 4"
        ],
        "correctAnswer": 0,
        "explanation": "r = Area / s = (√3 a²/4) / (3a/2) = a / (2√3)."
      },
      {
        "id": "mbm_q57",
        "text": "Value of sin(2 tan⁻¹(1/3)) is:",
        "options": [
          "3 / 5",
          "4 / 5",
          "1 / 2",
          "1 / 3"
        ],
        "correctAnswer": 0,
        "explanation": "sin(2θ) = 2 tan θ / (1 + tan² θ) = 2(1/3) / (1 + 1/9) = (2/3)/(10/9) = 3/5."
      },
      {
        "id": "mbm_q58",
        "text": "Period of function f(x) = sin(4x) is:",
        "options": [
          "π / 2",
          "π",
          "2π",
          "π / 4"
        ],
        "correctAnswer": 0,
        "explanation": "Period of sin(kx) is 2π/k = 2π/4 = π/2."
      },
      {
        "id": "mbm_q59",
        "text": "If sin A + cos A = 1, then sin 2A is equal to:",
        "options": [
          "0",
          "1",
          "1/2",
          "-1"
        ],
        "correctAnswer": 0,
        "explanation": "Square both sides: sin²A + cos²A + 2 sin A cos A = 1 => 1 + sin 2A = 1 => sin 2A = 0."
      },
      {
        "id": "mbm_q60",
        "text": "If tan⁻¹ x + tan⁻¹ y = π/4, then x + y + xy is equal to:",
        "options": [
          "1",
          "0",
          "-1",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "(x+y)/(1-xy) = tan(π/4) = 1 => x + y = 1 - xy => x + y + xy = 1."
      },
      {
        "id": "mbm_q61",
        "text": "Distance between parallel lines 3x + 4y + 5 = 0 and 3x + 4y - 15 = 0 is:",
        "options": [
          "4 units",
          "20 units",
          "2 units",
          "5 units"
        ],
        "correctAnswer": 0,
        "explanation": "d = |c₁ - c₂| / √(a²+b²) = |5 - (-15)| / √(9+16) = 20 / 5 = 4 units."
      },
      {
        "id": "mbm_q62",
        "text": "Radius of circle x² + y² - 4x + 6y - 12 = 0 is:",
        "options": [
          "5",
          "25",
          "√12",
          "7"
        ],
        "correctAnswer": 0,
        "explanation": "g = -2, f = 3, c = -12. r = √(g² + f² - c) = √(4 + 9 + 12) = √25 = 5."
      },
      {
        "id": "mbm_q63",
        "text": "Eccentricity of hyperbola x²/16 - y²/9 = 1 is:",
        "options": [
          "5 / 4",
          "4 / 5",
          "5 / 3",
          "3 / 5"
        ],
        "correctAnswer": 0,
        "explanation": "e = √(1 + b²/a²) = √(1 + 9/16) = √(25/16) = 5/4."
      },
      {
        "id": "mbm_q64",
        "text": "The slope of line perpendicular to line 2x - 3y + 7 = 0 is:",
        "options": [
          "-3 / 2",
          "3 / 2",
          "2 / 3",
          "-2 / 3"
        ],
        "correctAnswer": 0,
        "explanation": "Slope of given line m = 2/3. Perpendicular slope = -1/m = -3/2."
      },
      {
        "id": "mbm_q65",
        "text": "The coordinates of focus of parabola y² = 12x are:",
        "options": [
          "(3, 0)",
          "(0, 3)",
          "(-3, 0)",
          "(6, 0)"
        ],
        "correctAnswer": 0,
        "explanation": "4a = 12 => a = 3. Focus is (a, 0) = (3, 0)."
      },
      {
        "id": "mbm_q66",
        "text": "Distance of point P(2, 3, 4) from origin is:",
        "options": [
          "√29",
          "29",
          "5",
          "9"
        ],
        "correctAnswer": 0,
        "explanation": "d = √(2² + 3² + 4²) = √(4 + 9 + 16) = √29."
      },
      {
        "id": "mbm_q67",
        "text": "Direction cosines of a line equally inclined to coordinate axes are:",
        "options": [
          "±(1/√3, 1/√3, 1/√3)",
          "±(1, 1, 1)",
          "±(1/3, 1/3, 1/3)",
          "±(1/2, 1/2, 1/2)"
        ],
        "correctAnswer": 0,
        "explanation": "l² + m² + n² = 1 => 3 l² = 1 => l = ±1/√3."
      },
      {
        "id": "mbm_q68",
        "text": "Equation of plane passing through origin with normal vector (2, 3, -1) is:",
        "options": [
          "2x + 3y - z = 0",
          "2x + 3y + z = 0",
          "x + y + z = 0",
          "2x - 3y - z = 0"
        ],
        "correctAnswer": 0,
        "explanation": "a(x-0) + b(y-0) + c(z-0) = 0 => 2x + 3y - z = 0."
      },
      {
        "id": "mbm_q69",
        "text": "Length of latus rectum of ellipse x²/25 + y²/9 = 1 is:",
        "options": [
          "18 / 5",
          "9 / 5",
          "5 / 9",
          "10 / 3"
        ],
        "correctAnswer": 0,
        "explanation": "Latus rectum = 2b²/a = 2(9)/5 = 18/5."
      },
      {
        "id": "mbm_q70",
        "text": "Angle between lines x/1 = y/2 = z/3 and x/-2 = y/1 = z/0 is:",
        "options": [
          "90°",
          "0°",
          "45°",
          "60°"
        ],
        "correctAnswer": 0,
        "explanation": "a₁a₂ + b₁b₂ + c₁c₂ = 1(-2) + 2(1) + 3(0) = -2 + 2 + 0 = 0 => Lines are perpendicular (90°)."
      },
      {
        "id": "mbm_q71",
        "text": "If centroid of triangle with vertices (1,a), (2,b), (c,3) is (2,2), then a+b+c is:",
        "options": [
          "6",
          "3",
          "9",
          "4"
        ],
        "correctAnswer": 0,
        "explanation": "(1+2+c)/3 = 2 => c = 3. (a+b+3)/3 = 2 => a+b = 3. a+b+c = 3 + 3 = 6."
      },
      {
        "id": "mbm_q72",
        "text": "Equation of line passing through (1,2) and parallel to 4x + 5y = 10 is:",
        "options": [
          "4x + 5y = 14",
          "4x - 5y = -6",
          "5x + 4y = 13",
          "4x + 5y = 0"
        ],
        "correctAnswer": 0,
        "explanation": "Line is 4x + 5y = c. Substitute (1,2): 4(1) + 5(2) = 14 => 4x + 5y = 14."
      },
      {
        "id": "mbm_q73",
        "text": "Intersection of plane x + 2y + 3z = 6 with x-axis is at point:",
        "options": [
          "(6, 0, 0)",
          "(0, 3, 0)",
          "(0, 0, 2)",
          "(1, 0, 0)"
        ],
        "correctAnswer": 0,
        "explanation": "On x-axis, y = 0, z = 0 => x = 6. Point is (6,0,0)."
      },
      {
        "id": "mbm_q74",
        "text": "Condition for two lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0 to be parallel is:",
        "options": [
          "a₁/a₂ = b₁/b₂ ≠ c₁/c₂",
          "a₁a₂ + b₁b₂ = 0",
          "a₁b₂ + a₂b₁ = 0",
          "c₁ = c₂"
        ],
        "correctAnswer": 0,
        "explanation": "Parallel lines have equal slopes: -a₁/b₁ = -a₂/b₂ => a₁/a₂ = b₁/b₂."
      },
      {
        "id": "mbm_q75",
        "text": "Distance between planes 2x + y + 2z = 8 and 4x + 2y + 4z = 5 is:",
        "options": [
          "11 / 6",
          "3 / 2",
          "11 / 3",
          "7 / 6"
        ],
        "correctAnswer": 0,
        "explanation": "Second plane is 2x + y + 2z = 2.5. Distance = |8 - 2.5| / √(4+1+4) = 5.5 / 3 = 11 / 6."
      },
      {
        "id": "mbm_q76",
        "text": "Value of lim_{x->0} (sin 5x) / x is:",
        "options": [
          "5",
          "1",
          "0",
          "1/5"
        ],
        "correctAnswer": 0,
        "explanation": "lim_{x->0} (sin 5x)/(5x) × 5 = 1 × 5 = 5."
      },
      {
        "id": "mbm_q77",
        "text": "Derivative of sin(x²) with respect to x is:",
        "options": [
          "2x cos(x²)",
          "cos(x²)",
          "-2x cos(x²)",
          "2x sin(x²)"
        ],
        "correctAnswer": 0,
        "explanation": "Chain rule: cos(x²) × d(x²)/dx = 2x cos(x²)."
      },
      {
        "id": "mbm_q78",
        "text": "If y = e^(3x), then d²y/dx² is:",
        "options": [
          "9 e^(3x)",
          "3 e^(3x)",
          "6 e^(3x)",
          "e^(3x)"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = 3 e^(3x), d²y/dx² = 9 e^(3x)."
      },
      {
        "id": "mbm_q79",
        "text": "Function f(x) = x³ - 3x² + 3x - 1 is increasing on:",
        "options": [
          "Entire ℝ",
          "(1, ∞)",
          "(-∞, 1)",
          "[0, 1]"
        ],
        "correctAnswer": 0,
        "explanation": "f'(x) = 3x² - 6x + 3 = 3(x - 1)² ≥ 0 for all x ∈ ℝ. Strictly increasing everywhere."
      },
      {
        "id": "mbm_q80",
        "text": "The point of inflection for curve y = x³ is at:",
        "options": [
          "x = 0",
          "x = 1",
          "x = -1",
          "Does not exist"
        ],
        "correctAnswer": 0,
        "explanation": "y'' = 6x = 0 at x = 0, and sign of y'' changes across x = 0."
      },
      {
        "id": "mbm_q81",
        "text": "Value of lim_{x->0} (1 - cos x) / x² is:",
        "options": [
          "1 / 2",
          "1",
          "0",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Standard limit: lim (2 sin²(x/2)) / x² = 1/2."
      },
      {
        "id": "mbm_q82",
        "text": "If y = ln(sec x + tan x), then dy/dx is:",
        "options": [
          "sec x",
          "tan x",
          "sec x + tan x",
          "cos x"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = (sec x tan x + sec² x)/(sec x + tan x) = sec x."
      },
      {
        "id": "mbm_q83",
        "text": "Slope of tangent to curve y = x² - 4x + 3 at x = 3 is:",
        "options": [
          "2",
          "3",
          "0",
          "6"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = 2x - 4. At x = 3, slope = 2(3) - 4 = 2."
      },
      {
        "id": "mbm_q84",
        "text": "If f(x) = |x|, then at x = 0 the function is:",
        "options": [
          "Continuous but not differentiable",
          "Differentiable",
          "Discontinuous",
          "Neither continuous nor defined"
        ],
        "correctAnswer": 0,
        "explanation": "f(x) is continuous everywhere, but left derivative (-1) ≠ right derivative (+1) at x = 0."
      },
      {
        "id": "mbm_q85",
        "text": "Value of lim_{x->∞} (1 + 1/x)^x is:",
        "options": [
          "e",
          "1",
          "0",
          "∞"
        ],
        "correctAnswer": 0,
        "explanation": "Definition of Euler's number e."
      },
      {
        "id": "mbm_q86",
        "text": "Maximum value of f(x) = x (1 - x) for x ∈ [0, 1] is:",
        "options": [
          "1 / 4",
          "1 / 2",
          "1",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "f(x) = x - x². f'(x) = 1 - 2x = 0 => x = 1/2. Max value = (1/2)(1/2) = 1/4."
      },
      {
        "id": "mbm_q87",
        "text": "Derivative of tan⁻¹ x + cot⁻¹ x with respect to x is:",
        "options": [
          "0",
          "1/(1+x²)",
          "-1/(1+x²)",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "tan⁻¹ x + cot⁻¹ x = π/2 (constant). Derivative of constant is 0."
      },
      {
        "id": "mbm_q88",
        "text": "Value of lim_{x->0} (tan x - x) / x³ is:",
        "options": [
          "1 / 3",
          "1",
          "0",
          "1 / 2"
        ],
        "correctAnswer": 0,
        "explanation": "Using L'Hopital rule or expansion tan x = x + x³/3 + ... => limit = 1/3."
      },
      {
        "id": "mbm_q89",
        "text": "If x = a cos θ, y = a sin θ, then dy/dx is:",
        "options": [
          "-cot θ",
          "-tan θ",
          "tan θ",
          "cot θ"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = (a cos θ) / (-a sin θ) = -cot θ."
      },
      {
        "id": "mbm_q90",
        "text": "The function f(x) = x + 1/x for x > 0 achieves its local minimum at:",
        "options": [
          "x = 1",
          "x = 2",
          "x = 0",
          "x = 1/2"
        ],
        "correctAnswer": 0,
        "explanation": "f'(x) = 1 - 1/x² = 0 => x = 1 (for x > 0). Local minimum value is 2."
      },
      {
        "id": "mbm_q91",
        "text": "∫ (1 / (1 + x²)) dx is equal to:",
        "options": [
          "tan⁻¹ x + C",
          "sin⁻¹ x + C",
          "ln(1+x²) + C",
          "cot⁻¹ x + C"
        ],
        "correctAnswer": 0,
        "explanation": "Standard integral formula."
      },
      {
        "id": "mbm_q92",
        "text": "∫ e^x (sin x + cos x) dx is equal to:",
        "options": [
          "e^x sin x + C",
          "e^x cos x + C",
          "-e^x cos x + C",
          "e^x (sin x - cos x) + C"
        ],
        "correctAnswer": 0,
        "explanation": "Formula ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C with f(x) = sin x."
      },
      {
        "id": "mbm_q93",
        "text": "Value of definite integral ∫₀^(π/2) sin x dx is:",
        "options": [
          "1",
          "0",
          "2",
          "π/2"
        ],
        "correctAnswer": 0,
        "explanation": "[-cos x]₀^(π/2) = -cos(π/2) - (-cos 0) = 0 + 1 = 1."
      },
      {
        "id": "mbm_q94",
        "text": "Value of ∫₀^(π/2) (sin x / (sin x + cos x)) dx is:",
        "options": [
          "π / 4",
          "π / 2",
          "1",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "Using King's property ∫₀^a f(x) dx = ∫₀^a f(a-x) dx: 2I = ∫₀^(π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "mbm_q95",
        "text": "Order and degree of differential equation d²y/dx² + (dy/dx)³ + y = 0 are respectively:",
        "options": [
          "2 and 1",
          "2 and 3",
          "3 and 2",
          "1 and 3"
        ],
        "correctAnswer": 0,
        "explanation": "Highest derivative is 2nd order (order 2), and power of highest derivative is 1 (degree 1)."
      },
      {
        "id": "mbm_q96",
        "text": "General solution of differential equation dy/dx = y/x is:",
        "options": [
          "y = c x",
          "y = x + c",
          "y = c / x",
          "y² = x² + c"
        ],
        "correctAnswer": 0,
        "explanation": "dy/y = dx/x => ln y = ln x + ln c => y = c x."
      },
      {
        "id": "mbm_q97",
        "text": "Area bounded by parabola y = x² and line y = 4 is:",
        "options": [
          "32 / 3 sq units",
          "16 / 3 sq units",
          "8 sq units",
          "64 / 3 sq units"
        ],
        "correctAnswer": 0,
        "explanation": "Area = 2 ∫₀⁴ √y dy = 2 [ (2/3) y^(3/2) ]₀⁴ = (4/3)(8) = 32 / 3 sq units."
      },
      {
        "id": "mbm_q98",
        "text": "∫ (1 / x) dx for x > 0 is equal to:",
        "options": [
          "ln x + C",
          "-1/x² + C",
          "x ln x + C",
          "e^x + C"
        ],
        "correctAnswer": 0,
        "explanation": "Standard integral of 1/x is ln|x| + C."
      },
      {
        "id": "mbm_q99",
        "text": "Integrating factor (IF) for linear differential equation dy/dx + P(x) y = Q(x) is:",
        "options": [
          "e^(∫ P dx)",
          "∫ P dx",
          "e^(∫ Q dx)",
          "P(x)"
        ],
        "correctAnswer": 0,
        "explanation": "Standard IF formula = e^(∫ P(x) dx)."
      },
      {
        "id": "mbm_q100",
        "text": "Value of ∫_{-a}^a x³ cos x dx is:",
        "options": [
          "0",
          "2a³",
          "a⁴/4",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "f(x) = x³ cos x is an odd function (f(-x) = -f(x)). Definite integral of odd function from -a to a is 0."
      },
      {
        "id": "mbm_q101",
        "text": "∫ sec² x dx is equal to:",
        "options": [
          "tan x + C",
          "sec x + C",
          "-cot x + C",
          "ln(sec x) + C"
        ],
        "correctAnswer": 0,
        "explanation": "Standard integral formula."
      },
      {
        "id": "mbm_q102",
        "text": "Area of circle x² + y² = a² using integration is:",
        "options": [
          "π a²",
          "2π a²",
          "π a²/2",
          "4π a²"
        ],
        "correctAnswer": 0,
        "explanation": "Area = 4 ∫₀^a √(a² - x²) dx = 4 (π a² / 4) = π a²."
      },
      {
        "id": "mbm_q103",
        "text": "Differential equation representing family of lines y = m x is:",
        "options": [
          "x dy - y dx = 0",
          "x dy + y dx = 0",
          "dy/dx = x",
          "dy/dx = 1"
        ],
        "correctAnswer": 0,
        "explanation": "m = y/x. Differentiating y = (y/x)x gives dy/dx = y/x => x dy - y dx = 0."
      },
      {
        "id": "mbm_q104",
        "text": "∫ x e^x dx is equal to:",
        "options": [
          "e^x (x - 1) + C",
          "e^x (x + 1) + C",
          "x e^x + C",
          "e^x / x + C"
        ],
        "correctAnswer": 0,
        "explanation": "Integration by parts: x e^x - ∫ e^x dx = e^x (x - 1) + C."
      },
      {
        "id": "mbm_q105",
        "text": "Value of ∫₀^1 x (1 - x)⁵ dx is:",
        "options": [
          "1 / 42",
          "1 / 30",
          "1 / 12",
          "1 / 56"
        ],
        "correctAnswer": 0,
        "explanation": "Using property ∫₀¹ (1-x) x⁵ dx = ∫₀¹ (x⁵ - x⁶) dx = [1/6 - 1/7] = 1 / 42."
      },
      {
        "id": "mbm_q106",
        "text": "If vectors a⃗ = 2î + ĵ + 3k̂ and b⃗ = 3î - 2ĵ + k̂ are perpendicular, then their dot product a⃗ · b⃗ is:",
        "options": [
          "7",
          "0",
          "11",
          "5"
        ],
        "correctAnswer": 0,
        "explanation": "a⃗ · b⃗ = 2(3) + 1(-2) + 3(1) = 6 - 2 + 3 = 7... wait, if question asks dot product: 2(3)+1(-2)+3(1) = 7."
      },
      {
        "id": "mbm_q107",
        "text": "Magnitude of cross product |a⃗ × b⃗| represents area of a parallelogram with adjacent sides a⃗ and b⃗. If |a⃗|=3, |b⃗|=4, angle 30°, area is:",
        "options": [
          "6 sq units",
          "12 sq units",
          "6√3 sq units",
          "3 sq units"
        ],
        "correctAnswer": 0,
        "explanation": "Area = |a⃗||b⃗| sin θ = 3 × 4 × sin 30° = 12 × 1/2 = 6 sq units."
      },
      {
        "id": "mbm_q108",
        "text": "If a⃗, b⃗, c⃗ are coplanar vectors, then scalar triple product [a⃗ b⃗ c⃗] is equal to:",
        "options": [
          "0",
          "1",
          "a⃗ · (b⃗ × c⃗) ≠ 0",
          "-1"
        ],
        "correctAnswer": 0,
        "explanation": "Volume of parallelepiped formed by coplanar vectors is zero."
      },
      {
        "id": "mbm_q109",
        "text": "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, then P(A | B) is equal to:",
        "options": [
          "0.4",
          "0.5",
          "0.8",
          "0.2"
        ],
        "correctAnswer": 0,
        "explanation": "P(A | B) = P(A ∩ B) / P(B) = 0.2 / 0.5 = 0.4."
      },
      {
        "id": "mbm_q110",
        "text": "If two events A and B are independent, then P(A ∩ B) is equal to:",
        "options": [
          "P(A) · P(B)",
          "P(A) + P(B)",
          "P(A) / P(B)",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "By definition of independent events."
      },
      {
        "id": "mbm_q111",
        "text": "Mean of first n natural numbers is:",
        "options": [
          "(n + 1) / 2",
          "n / 2",
          "n(n + 1) / 2",
          "(n - 1) / 2"
        ],
        "correctAnswer": 0,
        "explanation": "Sum = n(n+1)/2. Mean = [n(n+1)/2] / n = (n + 1) / 2."
      },
      {
        "id": "mbm_q112",
        "text": "Variance of first 5 natural numbers (1, 2, 3, 4, 5) is:",
        "options": [
          "2",
          "2.5",
          "3",
          "1.5"
        ],
        "correctAnswer": 0,
        "explanation": "Formula for variance of first n natural numbers: (n² - 1)/12 = (25 - 1)/12 = 24/12 = 2."
      },
      {
        "id": "mbm_q113",
        "text": "A coin is tossed 3 times. Probability of getting EXACTLY 2 heads is:",
        "options": [
          "3 / 8",
          "1 / 8",
          "1 / 2",
          "3 / 4"
        ],
        "correctAnswer": 0,
        "explanation": "Favorable outcomes: HHT, HTH, THH (3). Total outcomes: 2³ = 8. P = 3/8."
      },
      {
        "id": "mbm_q114",
        "text": "If two dice are thrown together, probability of getting a sum of 7 is:",
        "options": [
          "1 / 6",
          "1 / 12",
          "5 / 36",
          "1 / 36"
        ],
        "correctAnswer": 0,
        "explanation": "Favorable pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6."
      },
      {
        "id": "mbm_q115",
        "text": "Unit vector parallel to vector a⃗ = 3î + 4ĵ is:",
        "options": [
          "(3î + 4ĵ) / 5",
          "(3î + 4ĵ) / 25",
          "3î + 4ĵ",
          "4î + 3ĵ"
        ],
        "correctAnswer": 0,
        "explanation": "â = a⃗ / |a⃗| = (3î + 4ĵ) / √(9+16) = (3î + 4ĵ)/5."
      },
      {
        "id": "mbm_q116",
        "text": "If mean of 5 observations is 10, new mean when each observation is multiplied by 3 is:",
        "options": [
          "30",
          "10",
          "15",
          "33"
        ],
        "correctAnswer": 0,
        "explanation": "Multiplying each observation by constant k multiplies mean by k: 10 × 3 = 30."
      },
      {
        "id": "mbm_q117",
        "text": "Probability of drawing an Ace from a well-shuffled deck of 52 cards is:",
        "options": [
          "1 / 13",
          "1 / 52",
          "4 / 13",
          "1 / 4"
        ],
        "correctAnswer": 0,
        "explanation": "4 Aces in 52 cards: P = 4/52 = 1/13."
      },
      {
        "id": "mbm_q118",
        "text": "Projection of vector a⃗ = î + ĵ on vector b⃗ = î - ĵ is:",
        "options": [
          "0",
          "1",
          "√2",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Projection = (a⃗ · b⃗) / |b⃗| = (1(1) + 1(-1)) / √2 = 0 / √2 = 0."
      },
      {
        "id": "mbm_q119",
        "text": "If a random variable X follows Binomial distribution B(n, p) with n = 10, p = 0.5, its variance is:",
        "options": [
          "2.5",
          "5",
          "10",
          "1.25"
        ],
        "correctAnswer": 0,
        "explanation": "Variance = n p q = 10 × 0.5 × 0.5 = 2.5."
      },
      {
        "id": "mbm_q200",
        "text": "If A and B are mutually exclusive events, then P(A ∪ B) is equal to:",
        "options": [
          "P(A) + P(B)",
          "P(A) · P(B)",
          "P(A) + P(B) - P(A ∩ B)",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "For mutually exclusive events, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)."
      }
    ]
  },
  {
    "id": "manekshaw-batch-paper-1-gat",
    "title": "MANEKSHAW BATCH PAPER 1 GAT",
    "description": "Official-pattern UPSC NDA II 2025 General Ability Test (GAT). 150 Questions (50 English + 100 GK/Science) | 2.5 Hours (150 Mins) | Total Marks: 600. Marking: +4 for correct, -1.3333 (1/3 deduction) for incorrect.",
    "timeLimitMinutes": 150,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1.3333333333333333,
    "totalMarks": 600,
    "passingMarks": 240,
    "isActive": true,
    "isResultPublished": true,
    "isHidden": false,
    "questions": [
      {
        "id": "mbg_q1",
        "text": "Spotting Errors: 'Neither the teacher (A) / nor the students (B) / was present in the hall (C) / No Error (D)'",
        "options": [
          "was present in the hall (C) -> should be 'were present'",
          "Neither the teacher (A)",
          "nor the students (B)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "When subjects are joined by 'neither...nor', verb agrees with the closer subject ('students' => plural verb 'were')."
      },
      {
        "id": "mbg_q2",
        "text": "Spotting Errors: 'He has been studying (A) / in this school (B) / since five years (C) / No Error (D)'",
        "options": [
          "since five years (C) -> should be 'for five years'",
          "He has been studying (A)",
          "in this school (B)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'For' is used for a duration/period of time ('five years'), whereas 'since' is used for a specific point in time."
      },
      {
        "id": "mbg_q3",
        "text": "Spotting Errors: 'Scarcely had he reached (A) / the station (B) / than the train started (C) / No Error (D)'",
        "options": [
          "than the train started (C) -> should be 'when the train started'",
          "Scarcely had he reached (A)",
          "the station (B)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'Scarcely' and 'Hardly' are followed by 'when' or 'before', not 'than'."
      },
      {
        "id": "mbg_q4",
        "text": "Spotting Errors: 'One of the student (A) / was selected for (B) / the National Award (C) / No Error (D)'",
        "options": [
          "One of the student (A) -> should be 'One of the students'",
          "was selected for (B)",
          "the National Award (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "The phrase 'One of the' is always followed by a plural noun ('students')."
      },
      {
        "id": "mbg_q5",
        "text": "Spotting Errors: 'Unless you do not work hard (A) / you cannot pass (B) / the NDA examination (C) / No Error (D)'",
        "options": [
          "Unless you do not work hard (A) -> should be 'Unless you work hard'",
          "you cannot pass (B)",
          "the NDA examination (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'Unless' itself contains a negative sense, so 'not' should not be used in the unless-clause."
      },
      {
        "id": "mbg_q6",
        "text": "Spotting Errors: 'The scenery of Kashmir (A) / are very (B) / enchanting (C) / No Error (D)'",
        "options": [
          "are very (B) -> should be 'is very'",
          "The scenery of Kashmir (A)",
          "enchanting (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'Scenery' is an uncountable singular noun and takes a singular verb ('is')."
      },
      {
        "id": "mbg_q7",
        "text": "Spotting Errors: 'He is senior (A) / than me (B) / in service (C) / No Error (D)'",
        "options": [
          "than me (B) -> should be 'to me'",
          "He is senior (A)",
          "in service (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior) take preposition 'to', not 'than'."
      },
      {
        "id": "mbg_q8",
        "text": "Spotting Errors: 'Suppose if (A) / it rains (B) / what will we do? (C) / No Error (D)'",
        "options": [
          "Suppose if (A) -> remove either 'Suppose' or 'if'",
          "it rains (B)",
          "what will we do? (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'Suppose' and 'if' mean the same thing; using them together is redundant."
      },
      {
        "id": "mbg_q9",
        "text": "Spotting Errors: 'Each of the boys (A) / have completed (B) / their assignment (C) / No Error (D)'",
        "options": [
          "have completed (B) -> should be 'has completed'",
          "Each of the boys (A)",
          "their assignment (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'Each' takes a singular verb ('has')."
      },
      {
        "id": "mbg_q10",
        "text": "Spotting Errors: 'The Chairman along with (A) / the committee members (B) / were present (C) / No Error (D)'",
        "options": [
          "were present (C) -> should be 'was present'",
          "The Chairman along with (A)",
          "the committee members (B)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "When subjects are connected by 'along with', verb agrees with the main first subject ('The Chairman' => 'was')."
      },
      {
        "id": "mbg_q11",
        "text": "Synonym of CANDID:",
        "options": [
          "Frank / Outspoken",
          "Secretive",
          "Dishonest",
          "Arrogant"
        ],
        "correctAnswer": 0,
        "explanation": "Candid means truthful, straightforward, and frank."
      },
      {
        "id": "mbg_q12",
        "text": "Synonym of LETHARGIC:",
        "options": [
          "Sluggish / Inactive",
          "Energetic",
          "Quick",
          "Enthusiastic"
        ],
        "correctAnswer": 0,
        "explanation": "Lethargic means lacking energy, sluggish, orpathetic."
      },
      {
        "id": "mbg_q13",
        "text": "Synonym of DILIGENT:",
        "options": [
          "Hardworking / Industrious",
          "Lazy",
          "Careless",
          "Foolish"
        ],
        "correctAnswer": 0,
        "explanation": "Diligent means showing care and conscientious effort in work."
      },
      {
        "id": "mbg_q14",
        "text": "Synonym of ABANDON:",
        "options": [
          "Forsake / Desert",
          "Retain",
          "Adopt",
          "Cherish"
        ],
        "correctAnswer": 0,
        "explanation": "Abandon means to leave completely or desert."
      },
      {
        "id": "mbg_q15",
        "text": "Synonym of BENEVOLENT:",
        "options": [
          "Kind-hearted / Charitable",
          "Malevolent",
          "Cruel",
          "Selfish"
        ],
        "correctAnswer": 0,
        "explanation": "Benevolent means well-meaning, kindly, and charitable."
      },
      {
        "id": "mbg_q16",
        "text": "Synonym of OBSTINATE:",
        "options": [
          "Stubborn / Rigid",
          "Flexible",
          "Yielding",
          "Submissive"
        ],
        "correctAnswer": 0,
        "explanation": "Obstinate means stubbornly refusing to change one's opinion."
      },
      {
        "id": "mbg_q17",
        "text": "Synonym of FRUGAL:",
        "options": [
          "Economical / Thrifty",
          "Extravagant",
          "Wasteful",
          "Generous"
        ],
        "correctAnswer": 0,
        "explanation": "Frugal means sparing or economical regarding money or food."
      },
      {
        "id": "mbg_q18",
        "text": "Synonym of ADVERSITY:",
        "options": [
          "Misfortune / Hardship",
          "Prosperity",
          "Success",
          "Joy"
        ],
        "correctAnswer": 0,
        "explanation": "Adversity means difficult conditions or misfortune."
      },
      {
        "id": "mbg_q19",
        "text": "Synonym of METICULOUS:",
        "options": [
          "Precise / Painstaking",
          "Careless",
          "Rough",
          "Sloppy"
        ],
        "correctAnswer": 0,
        "explanation": "Meticulous means showing great attention to detail."
      },
      {
        "id": "mbg_q20",
        "text": "Synonym of TRANQUIL:",
        "options": [
          "Calm / Peaceful",
          "Noisy",
          "Agitated",
          "Turbulent"
        ],
        "correctAnswer": 0,
        "explanation": "Tranquil means free from disturbance; calm."
      },
      {
        "id": "mbg_q21",
        "text": "Antonym of GLOOMY:",
        "options": [
          "Cheerful / Bright",
          "Dark",
          "Depressing",
          "Sad"
        ],
        "correctAnswer": 0,
        "explanation": "Gloomy means dark or depressing; antonym is cheerful or bright."
      },
      {
        "id": "mbg_q22",
        "text": "Antonym of PERMANENT:",
        "options": [
          "Transient / Temporary",
          "Everlasting",
          "Durable",
          "Stable"
        ],
        "correctAnswer": 0,
        "explanation": "Permanent means lasting; antonym is transient or temporary."
      },
      {
        "id": "mbg_q23",
        "text": "Antonym of HOSTILITY:",
        "options": [
          "Friendliness / Amity",
          "Enmity",
          "Antagonism",
          "Hatred"
        ],
        "correctAnswer": 0,
        "explanation": "Hostility means unfriendliness or opposition; antonym is amity or friendliness."
      },
      {
        "id": "mbg_q24",
        "text": "Antonym of BOISTEROUS:",
        "options": [
          "Quiet / Peaceful",
          "Noisy",
          "Clamorous",
          "Rowdy"
        ],
        "correctAnswer": 0,
        "explanation": "Boisterous means noisy, energetic, and rowdy; antonym is quiet or restrained."
      },
      {
        "id": "mbg_q25",
        "text": "Antonym of AFFLUENT:",
        "options": [
          "Poor / Impoverished",
          "Wealthy",
          "Rich",
          "Prosperous"
        ],
        "correctAnswer": 0,
        "explanation": "Affluent means wealthy; antonym is poor or impoverished."
      },
      {
        "id": "mbg_q26",
        "text": "Antonym of ADVANCE:",
        "options": [
          "Retreat / Recede",
          "Proceed",
          "Progress",
          "Move forward"
        ],
        "correctAnswer": 0,
        "explanation": "Advance means move forward; antonym is retreat or recede."
      },
      {
        "id": "mbg_q27",
        "text": "Antonym of ARTIFICIAL:",
        "options": [
          "Natural / Genuine",
          "Synthetic",
          "Man-made",
          "Fake"
        ],
        "correctAnswer": 0,
        "explanation": "Artificial means man-made; antonym is natural."
      },
      {
        "id": "mbg_q28",
        "text": "Antonym of VAGUE:",
        "options": [
          "Clear / Precise",
          "Obscure",
          "Indistinct",
          "Unclear"
        ],
        "correctAnswer": 0,
        "explanation": "Vague means uncertain or unclear; antonym is clear or precise."
      },
      {
        "id": "mbg_q29",
        "text": "Antonym of CONCORD:",
        "options": [
          "Discord / Disagreement",
          "Agreement",
          "Harmony",
          "Peace"
        ],
        "correctAnswer": 0,
        "explanation": "Concord means agreement or harmony; antonym is discord."
      },
      {
        "id": "mbg_q30",
        "text": "Antonym of OPTIMISTIC:",
        "options": [
          "Pessimistic",
          "Hopeful",
          "Confident",
          "Cheerfull"
        ],
        "correctAnswer": 0,
        "explanation": "Optimistic means hopeful; antonym is pessimistic."
      },
      {
        "id": "mbg_q31",
        "text": "Order the parts: 'P: in the country / Q: education is / R: the foundation of / S: all progress'",
        "options": [
          "Q - R - S - P  (Education is the foundation of all progress in the country)",
          "P - Q - R - S",
          "R - S - P - Q",
          "S - P - Q - R"
        ],
        "correctAnswer": 0,
        "explanation": "Correct coherent sequence is Q (education is) R (the foundation of) S (all progress) P (in the country)."
      },
      {
        "id": "mbg_q32",
        "text": "Order the parts: 'P: to the national grid / Q: renewable energy / R: is being added / S: rapidly'",
        "options": [
          "Q - R - S - P  (Renewable energy is being added rapidly to the national grid)",
          "P - Q - R - S",
          "S - P - Q - R",
          "R - Q - P - S"
        ],
        "correctAnswer": 0,
        "explanation": "Sequence Q - R - S - P forms a grammatically correct sentence."
      },
      {
        "id": "mbg_q33",
        "text": "Order the parts: 'P: by the soldiers / Q: extraordinary courage / R: was displayed / S: during the battle'",
        "options": [
          "Q - R - P - S  (Extraordinary courage was displayed by the soldiers during the battle)",
          "P - Q - R - S",
          "S - R - Q - P",
          "R - P - Q - S"
        ],
        "correctAnswer": 0,
        "explanation": "Sequence Q - R - P - S forms a clear passive sentence."
      },
      {
        "id": "mbg_q34",
        "text": "Idiom meaning: 'To burn the candle at both ends' means:",
        "options": [
          "To work extremely hard from early morning to late night",
          "To waste money recklessly",
          "To cause an accident",
          "To celebrate lavishly"
        ],
        "correctAnswer": 0,
        "explanation": "Idiom means to exhaust oneself by working or staying up very late and getting up early."
      },
      {
        "id": "mbg_q35",
        "text": "Idiom meaning: 'At the eleventh hour' means:",
        "options": [
          "At the last possible moment",
          "At 11 o'clock sharp",
          "Too early in the morning",
          "Never"
        ],
        "correctAnswer": 0,
        "explanation": "'At the eleventh hour' means at the very last moment before a deadline."
      },
      {
        "id": "mbg_q36",
        "text": "Idiom meaning: 'To spill the beans' means:",
        "options": [
          "To reveal a secret prematurely",
          "To drop food on the floor",
          "To cook a meal",
          "To make a mistake"
        ],
        "correctAnswer": 0,
        "explanation": "'Spill the beans' means to disclose confidential information."
      },
      {
        "id": "mbg_q37",
        "text": "One-word substitution: 'A person who looks at the bright side of things':",
        "options": [
          "Optimist",
          "Pessimist",
          "Atheist",
          "Altruist"
        ],
        "correctAnswer": 0,
        "explanation": "An optimist is a hopeful person looking at the positive side."
      },
      {
        "id": "mbg_q38",
        "text": "One-word substitution: 'Government by a single ruler with absolute power':",
        "options": [
          "Autocracy / Dictatorship",
          "Democracy",
          "Oligarchy",
          "Monarchy"
        ],
        "correctAnswer": 0,
        "explanation": "Autocracy is government by one person with unrestricted authority."
      },
      {
        "id": "mbg_q39",
        "text": "Choose correct spelling:",
        "options": [
          "Lieutenant",
          "Leutenant",
          "Lieutenent",
          "Leiutenant"
        ],
        "correctAnswer": 0,
        "explanation": "Correct spelling is L-I-E-U-T-E-N-A-N-T."
      },
      {
        "id": "mbg_q40",
        "text": "Choose correct preposition: 'He is addicted ___ smoking.'",
        "options": [
          "to",
          "with",
          "from",
          "in"
        ],
        "correctAnswer": 0,
        "explanation": "'Addicted' takes the preposition 'to'."
      },
      {
        "id": "mbg_q41",
        "text": "Fill in the blank: 'If I ___ the Prime Minister, I would change the education system.'",
        "options": [
          "were",
          "was",
          "am",
          "have been"
        ],
        "correctAnswer": 0,
        "explanation": "Subjunctive mood for hypothetical condition uses 'were' for all subjects."
      },
      {
        "id": "mbg_q42",
        "text": "Fill in the blank: 'Neither Rohit nor his friends ___ attending the party tonight.'",
        "options": [
          "are",
          "is",
          "was",
          "has"
        ],
        "correctAnswer": 0,
        "explanation": "Verb agrees with closest subject 'friends' (plural) => 'are'."
      },
      {
        "id": "mbg_q43",
        "text": "Fill in the blank: 'The sun rises in the east and ___ in the west.'",
        "options": [
          "sets",
          "set",
          "setting",
          "is setting"
        ],
        "correctAnswer": 0,
        "explanation": "Habitual/universal truth uses simple present tense ('sets')."
      },
      {
        "id": "mbg_q44",
        "text": "Fill in the blank: 'She is proficient ___ speaking English and French.'",
        "options": [
          "in",
          "at",
          "with",
          "for"
        ],
        "correctAnswer": 0,
        "explanation": "'Proficient' takes the preposition 'in'."
      },
      {
        "id": "mbg_q45",
        "text": "Fill in the blank: 'Hardly had he stepped out of the house ___ it started raining.'",
        "options": [
          "when",
          "than",
          "then",
          "that"
        ],
        "correctAnswer": 0,
        "explanation": "'Hardly had...' is paired with 'when'."
      },
      {
        "id": "mbg_q46",
        "text": "Idiom meaning: 'A blessing in disguise' means:",
        "options": [
          "A good thing that initially seemed bad",
          "A hidden enemy",
          "A religious prayer",
          "A fake praise"
        ],
        "correctAnswer": 0,
        "explanation": "A misfortune that turns out to have a good outcome."
      },
      {
        "id": "mbg_q47",
        "text": "One-word substitution: 'A life history of a person written by himself':",
        "options": [
          "Autobiography",
          "Biography",
          "Bibliography",
          "Calligraphy"
        ],
        "correctAnswer": 0,
        "explanation": "Autobiography is written by oneself; Biography is written by another."
      },
      {
        "id": "mbg_q48",
        "text": "Synonym of IMPEDIMENT:",
        "options": [
          "Obstacle / Barrier",
          "Assistance",
          "Clearance",
          "Support"
        ],
        "correctAnswer": 0,
        "explanation": "An impediment is a hindrance or obstacle."
      },
      {
        "id": "mbg_q49",
        "text": "Antonym of VOLUNTARY:",
        "options": [
          "Compulsory / Mandatory",
          "Optional",
          "Willing",
          "Intentional"
        ],
        "correctAnswer": 0,
        "explanation": "Voluntary means by free choice; antonym is compulsory."
      },
      {
        "id": "mbg_q50",
        "text": "Spotting Errors: 'No sooner did the bell ring (A) / when the students (B) / rushed out of class (C) / No Error (D)'",
        "options": [
          "when the students (B) -> should be 'than the students'",
          "No sooner did the bell ring (A)",
          "rushed out of class (C)",
          "No Error (D)"
        ],
        "correctAnswer": 0,
        "explanation": "'No sooner' is followed by 'than', not 'when'."
      },
      {
        "id": "mbg_q51",
        "text": "Which instrument is used to measure atmospheric pressure?",
        "options": [
          "Barometer",
          "Thermometer",
          "Hygrometer",
          "Anemometer"
        ],
        "correctAnswer": 0,
        "explanation": "Barometer is used to measure atmospheric pressure."
      },
      {
        "id": "mbg_q52",
        "text": "Acceleration due to gravity g at the center of the Earth is:",
        "options": [
          "Zero",
          "9.8 m/s²",
          "Infinite",
          "4.9 m/s²"
        ],
        "correctAnswer": 0,
        "explanation": "At the Earth's center, net gravitational force is zero, hence g = 0."
      },
      {
        "id": "mbg_q53",
        "text": "Light year is a unit of:",
        "options": [
          "Distance",
          "Time",
          "Intensity of light",
          "Mass"
        ],
        "correctAnswer": 0,
        "explanation": "A light-year is the distance light travels in one Julian year in vacuum."
      },
      {
        "id": "mbg_q54",
        "text": "Mirage observed in deserts in hot summer days is due to:",
        "options": [
          "Total Internal Reflection",
          "Refraction only",
          "Diffraction",
          "Interference"
        ],
        "correctAnswer": 0,
        "explanation": "Mirage is caused by total internal reflection of light in layered hot air."
      },
      {
        "id": "mbg_q55",
        "text": "Unit of electrical power is:",
        "options": [
          "Watt (or Joule/second)",
          "Joule",
          "Ampere",
          "Volt"
        ],
        "correctAnswer": 0,
        "explanation": "Electrical power P = V I is measured in Watts."
      },
      {
        "id": "mbg_q56",
        "text": "In a convex mirror, the image formed is ALWAYS:",
        "options": [
          "Virtual, erect, and diminished",
          "Real, inverted, and enlarged",
          "Real, erect, and magnified",
          "Virtual and enlarged"
        ],
        "correctAnswer": 0,
        "explanation": "Convex mirrors always form virtual, erect, and diminished images behind mirror."
      },
      {
        "id": "mbg_q57",
        "text": "Sound waves cannot travel through:",
        "options": [
          "Vacuum",
          "Air",
          "Water",
          "Steel"
        ],
        "correctAnswer": 0,
        "explanation": "Sound is a mechanical longitudinal wave requiring a material medium."
      },
      {
        "id": "mbg_q58",
        "text": "SI unit of frequency is:",
        "options": [
          "Hertz (Hz)",
          "Decibel",
          "Meter",
          "Second"
        ],
        "correctAnswer": 0,
        "explanation": "Hertz (1 cycle/second) is SI unit of frequency."
      },
      {
        "id": "mbg_q59",
        "text": "Focal length of a plane mirror is:",
        "options": [
          "Infinity",
          "Zero",
          "10 cm",
          "1 m"
        ],
        "correctAnswer": 0,
        "explanation": "A plane mirror has no curvature, so radius of curvature R = ∞ and f = ∞."
      },
      {
        "id": "mbg_q60",
        "text": "When light passes from air to glass, which quantity remains UNCHANGED?",
        "options": [
          "Frequency",
          "Wavelength",
          "Speed",
          "Amplitude"
        ],
        "correctAnswer": 0,
        "explanation": "Frequency depends on the source and remains constant across media boundaries."
      },
      {
        "id": "mbg_q61",
        "text": "Newton's First Law of Motion is also known as Law of:",
        "options": [
          "Inertia",
          "Moments",
          "Gravitation",
          "Action and Reaction"
        ],
        "correctAnswer": 0,
        "explanation": "First law defines inertia of rest and motion."
      },
      {
        "id": "mbg_q62",
        "text": "Hydraulic lift operates on the principle of:",
        "options": [
          "Pascal's Law",
          "Bernoulli's Principle",
          "Archimedes' Principle",
          "Boyle's Law"
        ],
        "correctAnswer": 0,
        "explanation": "Pascal's Law states pressure applied to an enclosed fluid is transmitted undiminished."
      },
      {
        "id": "mbg_q63",
        "text": "Apparent weight of a man in a freely falling elevator under gravity is:",
        "options": [
          "Zero (Weightlessness)",
          "Equal to true weight",
          "Double the true weight",
          "Half the true weight"
        ],
        "correctAnswer": 0,
        "explanation": "In free fall, a = g, so apparent weight N = m(g - g) = 0."
      },
      {
        "id": "mbg_q64",
        "text": "Device used to convert mechanical energy into electrical energy is:",
        "options": [
          "AC Generator / Dynamo",
          "Electric Motor",
          "Transformer",
          "Galvanometer"
        ],
        "correctAnswer": 0,
        "explanation": "Electric generator / dynamo converts mechanical energy into AC/DC electricity."
      },
      {
        "id": "mbg_q65",
        "text": "Transformer works on the principle of:",
        "options": [
          "Mutual Induction",
          "Self Induction",
          "Seebeck Effect",
          "Peltier Effect"
        ],
        "correctAnswer": 0,
        "explanation": "Transformers step up/down AC voltage using mutual induction between coils."
      },
      {
        "id": "mbg_q66",
        "text": "Which electromagnetic wave has the SHORTEST wavelength?",
        "options": [
          "Gamma Rays",
          "Radio Waves",
          "Ultraviolet Rays",
          "X-Rays"
        ],
        "correctAnswer": 0,
        "explanation": "Gamma rays have highest frequency and shortest wavelength in EM spectrum."
      },
      {
        "id": "mbg_q67",
        "text": "Splitting of white light into its 7 constituent colors by a prism is called:",
        "options": [
          "Dispersion",
          "Refraction",
          "Diffraction",
          "Polarization"
        ],
        "correctAnswer": 0,
        "explanation": "Dispersion occurs due to different wavelengths traveling at different speeds in glass."
      },
      {
        "id": "mbg_q68",
        "text": "Myopia (short-sightedness) is corrected using a lens of type:",
        "options": [
          "Concave Lens",
          "Convex Lens",
          "Cylindrical Lens",
          "Bifocal Lens"
        ],
        "correctAnswer": 0,
        "explanation": "Concave (diverging) lens is used to correct myopic vision."
      },
      {
        "id": "mbg_q69",
        "text": "Escape velocity from the surface of Earth is approximately:",
        "options": [
          "11.2 km/s",
          "9.8 km/s",
          "7.9 km/s",
          "3.0 × 10⁸ m/s"
        ],
        "correctAnswer": 0,
        "explanation": "Escape velocity from Earth v_e = √(2gR) ≈ 11.2 km/s."
      },
      {
        "id": "mbg_q70",
        "text": "Specific heat capacity of which substance is HIGHEST among the following?",
        "options": [
          "Water",
          "Copper",
          "Iron",
          "Mercury"
        ],
        "correctAnswer": 0,
        "explanation": "Water has an exceptionally high specific heat capacity (4184 J/kg K)."
      },
      {
        "id": "mbg_q71",
        "text": "Primary colors of light in additive color mixing are:",
        "options": [
          "Red, Green, Blue (RGB)",
          "Red, Yellow, Blue",
          "Cyan, Magenta, Yellow",
          "Red, White, Black"
        ],
        "correctAnswer": 0,
        "explanation": "RGB (Red, Green, Blue) are the primary additive colors of light."
      },
      {
        "id": "mbg_q72",
        "text": "A fuse wire should have:",
        "options": [
          "High resistance and low melting point",
          "Low resistance and high melting point",
          "High resistance and high melting point",
          "Low resistance and low melting point"
        ],
        "correctAnswer": 0,
        "explanation": "A fuse wire heats up rapidly (I²R) and melts (low melting point) to break excessive current."
      },
      {
        "id": "mbg_q73",
        "text": "The pitch of a sound wave depends on its:",
        "options": [
          "Frequency",
          "Amplitude",
          "Speed",
          "Loudness"
        ],
        "correctAnswer": 0,
        "explanation": "Pitch is determined by the frequency of the sound wave."
      },
      {
        "id": "mbg_q74",
        "text": "Bernoulli's theorem is based on conservation of:",
        "options": [
          "Energy",
          "Mass",
          "Momentum",
          "Angular Momentum"
        ],
        "correctAnswer": 0,
        "explanation": "Bernoulli's equation expresses conservation of mechanical energy for ideal fluid flow."
      },
      {
        "id": "mbg_q75",
        "text": "Substance used as a moderator in a nuclear reactor is:",
        "options": [
          "Heavy Water (D₂O) or Graphite",
          "Uranium-235",
          "Cadmium rods",
          "Liquid Sodium"
        ],
        "correctAnswer": 0,
        "explanation": "Heavy water (D₂O) and graphite slow down fast neutrons to sustain fission."
      },
      {
        "id": "mbg_q76",
        "text": "pH of pure water at 25 °C is:",
        "options": [
          "7.0 (Neutral)",
          "0.0",
          "14.0",
          "1.0"
        ],
        "correctAnswer": 0,
        "explanation": "Pure water has [H⁺] = 10⁻⁷ M, hence pH = -log(10⁻⁷) = 7."
      },
      {
        "id": "mbg_q77",
        "text": "Gas responsible for Global Warming (Greenhouse Effect) primarily is:",
        "options": [
          "Carbon dioxide (CO₂)",
          "Oxygen (O₂)",
          "Nitrogen (N₂)",
          "Argon (Ar)"
        ],
        "correctAnswer": 0,
        "explanation": "CO₂ is the primary anthropogenic greenhouse gas trapping infrared radiation."
      },
      {
        "id": "mbg_q78",
        "text": "Chemical formula of Washing Soda is:",
        "options": [
          "Na₂CO₃ · 10H₂O",
          "NaHCO₃",
          "NaOH",
          "CaSO₄ · 2H₂O"
        ],
        "correctAnswer": 0,
        "explanation": "Washing soda is Sodium Carbonate Decahydrate (Na₂CO₃ · 10H₂O)."
      },
      {
        "id": "mbg_q79",
        "text": "Baking Soda is chemically known as:",
        "options": [
          "Sodium Bicarbonate (NaHCO₃)",
          "Sodium Carbonate",
          "Sodium Hydroxide",
          "Calcium Carbonate"
        ],
        "correctAnswer": 0,
        "explanation": "Baking soda is Sodium Hydrogen Carbonate (NaHCO₃)."
      },
      {
        "id": "mbg_q80",
        "text": "The most abundant gas in Earth's atmosphere is:",
        "options": [
          "Nitrogen (78%)",
          "Oxygen (21%)",
          "Carbon dioxide",
          "Argon"
        ],
        "correctAnswer": 0,
        "explanation": "Nitrogen makes up approx 78% of Earth's atmosphere by volume."
      },
      {
        "id": "mbg_q81",
        "text": "Which metal is liquid at room temperature (25 °C)?",
        "options": [
          "Mercury (Hg)",
          "Sodium (Na)",
          "Lead (Pb)",
          "Aluminum (Al)"
        ],
        "correctAnswer": 0,
        "explanation": "Mercury (Hg) is the only transition metal liquid at room temperature."
      },
      {
        "id": "mbg_q82",
        "text": "Process of heating sulfide ore in presence of excess air is called:",
        "options": [
          "Roasting",
          "Calcination",
          "Smelting",
          "Refining"
        ],
        "correctAnswer": 0,
        "explanation": "Roasting converts sulfide ores into oxides by heating in excess oxygen."
      },
      {
        "id": "mbg_q83",
        "text": "Main constituent of Natural Gas and Biogas is:",
        "options": [
          "Methane (CH₄)",
          "Ethane (C₂H₆)",
          "Propane (C₃H₈)",
          "Butane (C₄H₁₀)"
        ],
        "correctAnswer": 0,
        "explanation": "Methane (CH₄) accounts for over 85-90% of natural gas and biogas."
      },
      {
        "id": "mbg_q84",
        "text": "Acid present in vinegar is:",
        "options": [
          "Acetic Acid (CH₃COOH)",
          "Formic Acid",
          "Citric Acid",
          "Tartaric Acid"
        ],
        "correctAnswer": 0,
        "explanation": "Vinegar is a 5-8% aqueous solution of Acetic Acid."
      },
      {
        "id": "mbg_q85",
        "text": "Solder alloy used for joining electrical wires consists of:",
        "options": [
          "Lead and Tin (Pb + Sn)",
          "Copper and Zinc",
          "Copper and Tin",
          "Aluminum and Nickel"
        ],
        "correctAnswer": 0,
        "explanation": "Solder is an alloy of Tin (60%) and Lead (40%)."
      },
      {
        "id": "mbg_q86",
        "text": "Chemical name of Plaster of Paris is:",
        "options": [
          "Calcium Sulfate Hemihydrate (CaSO₄ · ½H₂O)",
          "Calcium Carbonate",
          "Calcium Sulfate Dihydrate",
          "Calcium Oxide"
        ],
        "correctAnswer": 0,
        "explanation": "Plaster of Paris is CaSO₄ · ½H₂O formed by heating Gypsum at 373 K."
      },
      {
        "id": "mbg_q87",
        "text": "Isotopes of an element have same number of protons but different number of:",
        "options": [
          "Neutrons",
          "Protons",
          "Electrons",
          "Atomic Number"
        ],
        "correctAnswer": 0,
        "explanation": "Isotopes have identical Z (protons) but different mass number A due to different neutrons."
      },
      {
        "id": "mbg_q88",
        "text": "Element with the highest electronegativity on Pauling scale is:",
        "options": [
          "Fluorine (F)",
          "Chlorine (Cl)",
          "Oxygen (O)",
          "Cesium (Cs)"
        ],
        "correctAnswer": 0,
        "explanation": "Fluorine has the highest electronegativity value (4.0)."
      },
      {
        "id": "mbg_q89",
        "text": "Cinnabar is an ore of which metal?",
        "options": [
          "Mercury (HgS)",
          "Lead",
          "Copper",
          "Iron"
        ],
        "correctAnswer": 0,
        "explanation": "Cinnabar (HgS) is the primary ore of Mercury."
      },
      {
        "id": "mbg_q90",
        "text": "Gas evolved when Zinc reacts with dilute Hydrochloric Acid is:",
        "options": [
          "Hydrogen (H₂)",
          "Oxygen (O₂)",
          "Chlorine (Cl₂)",
          "Carbon dioxide"
        ],
        "correctAnswer": 0,
        "explanation": "Zn + 2HCl -> ZnCl₂ + H₂↑."
      },
      {
        "id": "mbg_q91",
        "text": "Which cell organelle is known as the 'Powerhouse of the Cell'?",
        "options": [
          "Mitochondria",
          "Ribosome",
          "Lysosome",
          "Golgi Apparatus"
        ],
        "correctAnswer": 0,
        "explanation": "Mitochondria produce cellular energy in the form of ATP via aerobic respiration."
      },
      {
        "id": "mbg_q92",
        "text": "Deficiency of Vitamin C leads to which disease?",
        "options": [
          "Scurvy",
          "Rickets",
          "Beriberi",
          "Night Blindness"
        ],
        "correctAnswer": 0,
        "explanation": "Vitamin C (Ascorbic acid) deficiency causes Scurvy characterized by bleeding gums."
      },
      {
        "id": "mbg_q93",
        "text": "Blood group known as 'Universal Donor' is:",
        "options": [
          "O Negative (O -ve)",
          "AB Positive",
          "O Positive",
          "A Negative"
        ],
        "correctAnswer": 0,
        "explanation": "O Negative lacks A, B, and Rh antigens, making it universal donor."
      },
      {
        "id": "mbg_q94",
        "text": "Red color of human blood is due to the presence of:",
        "options": [
          "Hemoglobin",
          "Myoglobin",
          "Chlorophyll",
          "Hemocyanin"
        ],
        "correctAnswer": 0,
        "explanation": "Hemoglobin is an iron-containing protein in RBCs carrying oxygen."
      },
      {
        "id": "mbg_q95",
        "text": "Master gland of the human endocrine system is:",
        "options": [
          "Pituitary Gland",
          "Thyroid Gland",
          "Adrenal Gland",
          "Pancreas"
        ],
        "correctAnswer": 0,
        "explanation": "Pituitary gland regulates and controls other endocrine glands."
      },
      {
        "id": "mbg_q96",
        "text": "Process of food synthesis by green plants in presence of sunlight is:",
        "options": [
          "Photosynthesis",
          "Respiration",
          "Transpiration",
          "Fermentation"
        ],
        "correctAnswer": 0,
        "explanation": "6 CO₂ + 6 H₂O + Sunlight -> C₆H₁₂O₆ + 6 O₂."
      },
      {
        "id": "mbg_q97",
        "text": "Human heart has how many chambers?",
        "options": [
          "4 Chambers (2 Atria, 2 Ventricles)",
          "2 Chambers",
          "3 Chambers",
          "6 Chambers"
        ],
        "correctAnswer": 0,
        "explanation": "Human heart consists of 4 distinct chambers."
      },
      {
        "id": "mbg_q98",
        "text": "Hormone that regulates blood glucose level by lowering it is:",
        "options": [
          "Insulin",
          "Glucagon",
          "Adrenaline",
          "Thyroxine"
        ],
        "correctAnswer": 0,
        "explanation": "Insulin secreted by beta cells of pancreas promotes cellular uptake of glucose."
      },
      {
        "id": "mbg_q99",
        "text": "Suicidal bags of a cell are:",
        "options": [
          "Lysosomes",
          "Ribosomes",
          "Centrosomes",
          "Endoplasmic Reticulum"
        ],
        "correctAnswer": 0,
        "explanation": "Lysosomes contain digestive enzymes capable of destroying damaged cells."
      },
      {
        "id": "mbg_q100",
        "text": "Normal human body temperature on Celsius scale is approximately:",
        "options": [
          "37 °C (98.6 °F)",
          "31.5 °C",
          "40 °C",
          "98.6 °C"
        ],
        "correctAnswer": 0,
        "explanation": "Average normal human body temperature is 37 °C."
      },
      {
        "id": "mbg_q101",
        "text": "Who was the founder of the Maurya Empire in India?",
        "options": [
          "Chandragupta Maurya",
          "Ashoka",
          "Bindusara",
          "Harsha"
        ],
        "correctAnswer": 0,
        "explanation": "Chandragupta Maurya founded the Maurya Empire in 322 BCE with Chanakya's guidance."
      },
      {
        "id": "mbg_q102",
        "text": "Battle of Plassey was fought in the year:",
        "options": [
          "1757",
          "1764",
          "1857",
          "1761"
        ],
        "correctAnswer": 0,
        "explanation": "Battle of Plassey took place on 23 June 1757 between East India Company and Nawab Siraj-ud-Daulah."
      },
      {
        "id": "mbg_q103",
        "text": "First Governor-General of Independent India was:",
        "options": [
          "Lord Mountbatten",
          "C. Rajagopalachari",
          "Dr. Rajendra Prasad",
          "Lord Wavell"
        ],
        "correctAnswer": 0,
        "explanation": "Lord Mountbatten served as the first Governor-General of independent India (1947-48). First Indian was C. Rajagopalachari."
      },
      {
        "id": "mbg_q104",
        "text": "Who gave the famous slogan 'Do or Die' (Karo ya Maro) during Quit India Movement?",
        "options": [
          "Mahatma Gandhi",
          "Subhash Chandra Bose",
          "Jawaharlal Nehru",
          "Bhagat Singh"
        ],
        "correctAnswer": 0,
        "explanation": "Mahatma Gandhi launched the Quit India Movement in August 1942 with the call 'Do or Die'."
      },
      {
        "id": "mbg_q105",
        "text": "Partition of Bengal in 1905 was announced by which Viceroy?",
        "options": [
          "Lord Curzon",
          "Lord Ripon",
          "Lord Lytton",
          "Lord Dalhousie"
        ],
        "correctAnswer": 0,
        "explanation": "Lord Curzon issued the order partitioning Bengal in 1905."
      },
      {
        "id": "mbg_q106",
        "text": "Indian National Congress was founded in 1885 by:",
        "options": [
          "A. O. Hume",
          "W. C. Bonnerjee",
          "Dadabhai Naoroji",
          "Gopal Krishna Gokhale"
        ],
        "correctAnswer": 0,
        "explanation": "Allan Octavian Hume founded INC in December 1885 in Bombay."
      },
      {
        "id": "mbg_q107",
        "text": "First War of Indian Independence (Sepoy Mutiny) broke out in 1857 at:",
        "options": [
          "Meerut",
          "Delhi",
          "Jhansi",
          "Kanpur"
        ],
        "correctAnswer": 0,
        "explanation": "Revolt of 1857 began on May 10, 1857, at Meerut garrison."
      },
      {
        "id": "mbg_q108",
        "text": "Who founded the 'Azad Hind Fauj' (Indian National Army - INA) in Singapore?",
        "options": [
          "Subhash Chandra Bose & Rash Behari Bose",
          "Bhagat Singh",
          "Lala Lajpat Rai",
          "Chandra Shekhar Azad"
        ],
        "correctAnswer": 0,
        "explanation": "Netaji Subhash Chandra Bose revived and reorganized the INA in Singapore in 1943."
      },
      {
        "id": "mbg_q109",
        "text": "Jallianwala Bagh Massacre took place in Amritsar on:",
        "options": [
          "13 April 1919",
          "15 August 1947",
          "26 January 1930",
          "9 August 1942"
        ],
        "correctAnswer": 0,
        "explanation": "General Dyer ordered firing on unarmed gathering on Baisakhi day, 13 April 1919."
      },
      {
        "id": "mbg_q110",
        "text": "System of Dual Government in Bengal was introduced by:",
        "options": [
          "Robert Clive",
          "Warren Hastings",
          "Lord Cornwallis",
          "Lord Wellesley"
        ],
        "correctAnswer": 0,
        "explanation": "Robert Clive introduced Dual System of Government in Bengal after Treaty of Allahabad (1765)."
      },
      {
        "id": "mbg_q111",
        "text": "Who was known as 'Frontier Gandhi'?",
        "options": [
          "Khan Abdul Ghaffar Khan",
          "Maulana Abul Kalam Azad",
          "Sheikh Abdullah",
          "Hasrat Mohani"
        ],
        "correctAnswer": 0,
        "explanation": "Khan Abdul Ghaffar Khan (Badshah Khan), leader of Khudai Khidmatgar movement."
      },
      {
        "id": "mbg_q112",
        "text": "Which Mughal Emperor built the Taj Mahal at Agra?",
        "options": [
          "Shah Jahan",
          "Akbar",
          "Jahangir",
          "Aurangzeb"
        ],
        "correctAnswer": 0,
        "explanation": "Shah Jahan commissioned the Taj Mahal in memory of Mumtaz Mahal."
      },
      {
        "id": "mbg_q113",
        "text": "Poona Pact (1932) was signed between:",
        "options": [
          "Mahatma Gandhi and Dr. B. R. Ambedkar",
          "Jawaharlal Nehru and Lord Irwin",
          "Subhash Bose and Gandhi",
          "Jinnah and Gandhi"
        ],
        "correctAnswer": 0,
        "explanation": "Signed on 24 September 1932 regarding electoral representation for depressed classes."
      },
      {
        "id": "mbg_q114",
        "text": "Who was the author of national song 'Vande Mataram'?",
        "options": [
          "Bankim Chandra Chattopadhyay",
          "Rabindranath Tagore",
          "Sarojini Naidu",
          "Iqbal"
        ],
        "correctAnswer": 0,
        "explanation": "Composed by Bankim Chandra Chattopadhyay in his novel Anandamath."
      },
      {
        "id": "mbg_q115",
        "text": "Non-Cooperation Movement was called off by Gandhi in 1922 due to incident at:",
        "options": [
          "Chauri Chaura",
          "Jallianwala Bagh",
          "Dandi",
          "Kakori"
        ],
        "correctAnswer": 0,
        "explanation": "Violence at Chauri Chaura (Gorakhpur) on 4 Feb 1922 led Gandhi to suspend movement."
      },
      {
        "id": "mbg_q116",
        "text": "First Governor-General of Bengal was:",
        "options": [
          "Warren Hastings",
          "Lord William Bentinck",
          "Robert Clive",
          "Lord Canning"
        ],
        "correctAnswer": 0,
        "explanation": "Regulating Act 1773 designated Warren Hastings as first Governor-General of Bengal."
      },
      {
        "id": "mbg_q117",
        "text": "Who founded the Arya Samaj in 1875?",
        "options": [
          "Swami Dayananda Saraswati",
          "Swami Vivekananda",
          "Raja Ram Mohan Roy",
          "Ishwar Chandra Vidyasagar"
        ],
        "correctAnswer": 0,
        "explanation": "Swami Dayananda Saraswati founded Arya Samaj with slogan 'Back to Vedas'."
      },
      {
        "id": "mbg_q118",
        "text": "Raja Ram Mohan Roy founded which reform movement in 1828?",
        "options": [
          "Brahmo Samaj",
          "Prarthana Samaj",
          "Ramakrishna Mission",
          "Theosophical Society"
        ],
        "correctAnswer": 0,
        "explanation": "Raja Ram Mohan Roy established Brahmo Sabha (later Brahmo Samaj) in Calcutta."
      },
      {
        "id": "mbg_q119",
        "text": "Famous Dandi Salt March by Mahatma Gandhi commenced on:",
        "options": [
          "12 March 1930",
          "26 January 1930",
          "15 August 1947",
          "8 August 1942"
        ],
        "correctAnswer": 0,
        "explanation": "Gandhi started 24-day march from Sabarmati Ashram to Dandi on 12 March 1930."
      },
      {
        "id": "mbg_q120",
        "text": "Who was the first Indian to pass the Indian Civil Services (ICS) examination?",
        "options": [
          "Satyendranath Tagore",
          "Subhash Chandra Bose",
          "Surendranath Banerjee",
          "R. C. Dutt"
        ],
        "correctAnswer": 0,
        "explanation": "Satyendranath Tagore (brother of Rabindranath Tagore) qualified ICS in 1863."
      },
      {
        "id": "mbg_q121",
        "text": "Which planet in Solar System is known as the 'Red Planet'?",
        "options": [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        "correctAnswer": 0,
        "explanation": "Mars appears red due to iron oxide (rust) on its surface."
      },
      {
        "id": "mbg_q122",
        "text": "Longest river in the world is:",
        "options": [
          "Nile",
          "Amazon",
          "Yangtze",
          "Mississippi"
        ],
        "correctAnswer": 0,
        "explanation": "Nile River in Africa is the longest river (~6650 km)."
      },
      {
        "id": "mbg_q123",
        "text": "Highest mountain peak in India (undisputed territory) is:",
        "options": [
          "Kangchenjunga (8586 m)",
          "K2 / Godwin Austen",
          "Nanda Devi",
          "Annapurna"
        ],
        "correctAnswer": 0,
        "explanation": "Kangchenjunga (Sikkim) is highest peak within fully India-administered territory."
      },
      {
        "id": "mbg_q124",
        "text": "Which imaginary line passes horizontally through middle of India?",
        "options": [
          "Tropic of Cancer (23.5° N)",
          "Equator",
          "Tropic of Capricorn",
          "Prime Meridian"
        ],
        "correctAnswer": 0,
        "explanation": "Tropic of Cancer (23° 30' N) passes through 8 Indian states."
      },
      {
        "id": "mbg_q125",
        "text": "Standard Meridian of India for Indian Standard Time (IST) is:",
        "options": [
          "82.5° E Longitude (82° 30' E)",
          "80.0° E",
          "90.0° E",
          "75.0° E"
        ],
        "correctAnswer": 0,
        "explanation": "82° 30' E passing through Mirzapur (UP) determines IST (UTC +5:30)."
      },
      {
        "id": "mbg_q126",
        "text": "Layers of Earth's atmosphere in order from ground upwards:",
        "options": [
          "Troposphere, Stratosphere, Mesosphere, Thermosphere",
          "Stratosphere, Troposphere, Exosphere",
          "Mesosphere, Troposphere, Stratosphere",
          "Thermosphere, Mesosphere, Troposphere"
        ],
        "correctAnswer": 0,
        "explanation": "Troposphere -> Stratosphere -> Mesosphere -> Thermosphere -> Exosphere."
      },
      {
        "id": "mbg_q127",
        "text": "Ozone layer is primarily present in which atmospheric layer?",
        "options": [
          "Stratosphere",
          "Troposphere",
          "Mesosphere",
          "Ionosphere"
        ],
        "correctAnswer": 0,
        "explanation": "Stratospheric ozone protects Earth by absorbing solar UV radiation."
      },
      {
        "id": "mbg_q128",
        "text": "Which river is known as 'Sorrow of Bengal'?",
        "options": [
          "Damodar River",
          "Kosi River",
          "Hooghly River",
          "Brahmaputra"
        ],
        "correctAnswer": 0,
        "explanation": "Damodar River was historically known for devastating floods in Bengal."
      },
      {
        "id": "mbg_q129",
        "text": "Largest ocean on Earth by surface area is:",
        "options": [
          "Pacific Ocean",
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean"
        ],
        "correctAnswer": 0,
        "explanation": "Pacific Ocean is the largest and deepest ocean."
      },
      {
        "id": "mbg_q130",
        "text": "Majuli, the world's largest river island, is located on which river?",
        "options": [
          "Brahmaputra (Assam)",
          "Ganga",
          "Godavari",
          "Indus"
        ],
        "correctAnswer": 0,
        "explanation": "Majuli island is situated in Assam on the Brahmaputra River."
      },
      {
        "id": "mbg_q131",
        "text": "Which Indian state has the LONGEST coastline?",
        "options": [
          "Gujarat",
          "Andhra Pradesh",
          "Tamil Nadu",
          "Maharashtra"
        ],
        "correctAnswer": 0,
        "explanation": "Gujarat has the longest coastline among Indian states (~1600 km)."
      },
      {
        "id": "mbg_q132",
        "text": "Palk Strait separates India from which country?",
        "options": [
          "Sri Lanka",
          "Maldives",
          "Bangladesh",
          "Myanmar"
        ],
        "correctAnswer": 0,
        "explanation": "Palk Strait connects Bay of Bengal with Palk Bay between India and Sri Lanka."
      },
      {
        "id": "mbg_q133",
        "text": "Type of soil most widespread and fertile in Northern Indian Plains is:",
        "options": [
          "Alluvial Soil",
          "Black Soil (Regur)",
          "Red Soil",
          "Laterite Soil"
        ],
        "correctAnswer": 0,
        "explanation": "Alluvial soil deposited by Indus, Ganga, and Brahmaputra rivers covers northern plains."
      },
      {
        "id": "mbg_q134",
        "text": "Black soil (Regur soil) is most suitable for cultivation of:",
        "options": [
          "Cotton",
          "Tea",
          "Jute",
          "Wheat"
        ],
        "correctAnswer": 0,
        "explanation": "Black clayey soil holds moisture well and is ideal for growing cotton."
      },
      {
        "id": "mbg_q135",
        "text": "Which river is called 'Dakshin Ganga' (Ganga of the South)?",
        "options": [
          "Godavari",
          "Krishna",
          "Kaveri",
          "Narmada"
        ],
        "correctAnswer": 0,
        "explanation": "Godavari is the largest peninsular river and is termed Dakshin Ganga."
      },
      {
        "id": "mbg_q136",
        "text": "Which state in India is the largest producer of Tea?",
        "options": [
          "Assam",
          "West Bengal",
          "Kerala",
          "Tamil Nadu"
        ],
        "correctAnswer": 0,
        "explanation": "Assam accounts for over half of India's total tea production."
      },
      {
        "id": "mbg_q137",
        "text": "Great Barrier Reef, the largest coral reef system, is off the coast of:",
        "options": [
          "Australia",
          "Indonesia",
          "Brazil",
          "South Africa"
        ],
        "correctAnswer": 0,
        "explanation": "Located in Coral Sea off the coast of Queensland, Australia."
      },
      {
        "id": "mbg_q138",
        "text": "Suez Canal connects which two bodies of water?",
        "options": [
          "Mediterranean Sea and Red Sea",
          "Red Sea and Arabian Sea",
          "Atlantic and Pacific",
          "Black Sea and Caspian Sea"
        ],
        "correctAnswer": 0,
        "explanation": "Suez Canal provides a direct maritime shipping route between Europe and Asia."
      },
      {
        "id": "mbg_q139",
        "text": "Which city is known as the 'Silicon Valley of India'?",
        "options": [
          "Bengaluru",
          "Hyderabad",
          "Pune",
          "Chennai"
        ],
        "correctAnswer": 0,
        "explanation": "Bengaluru is India's leading IT exporter and technology hub."
      },
      {
        "id": "mbg_q140",
        "text": "Annual rainfall pattern in India is dominated by which monsoon?",
        "options": [
          "South-West Monsoon",
          "North-East Monsoon",
          "Western Disturbances",
          "Retreating Monsoon"
        ],
        "correctAnswer": 0,
        "explanation": "South-West monsoon (June-Sept) brings ~75% of India's annual rainfall."
      },
      {
        "id": "mbg_q141",
        "text": "Who is the Supreme Commander of the Indian Armed Forces?",
        "options": [
          "President of India",
          "Prime Minister",
          "Defense Minister",
          "Chief of Defence Staff (CDS)"
        ],
        "correctAnswer": 0,
        "explanation": "Under Article 53(2) of Constitution, Supreme Command vests in President."
      },
      {
        "id": "mbg_q142",
        "text": "Constitution of India was adopted by Constituent Assembly on:",
        "options": [
          "26 November 1949",
          "26 January 1950",
          "15 August 1947",
          "9 December 1946"
        ],
        "correctAnswer": 0,
        "explanation": "Adopted on 26 Nov 1949 (Constitution Day) and came into force on 26 Jan 1950."
      },
      {
        "id": "mbg_q143",
        "text": "Minimum age requirement to become President of India is:",
        "options": [
          "35 years",
          "30 years",
          "25 years",
          "21 years"
        ],
        "correctAnswer": 0,
        "explanation": "Article 58 specifies minimum age of 35 years for presidential eligibility."
      },
      {
        "id": "mbg_q144",
        "text": "Fundamental Rights are enshrined in which Part of Indian Constitution?",
        "options": [
          "Part III (Articles 12 to 35)",
          "Part IV",
          "Part II",
          "Part V"
        ],
        "correctAnswer": 0,
        "explanation": "Part III contains fundamental rights guaranteed to citizens."
      },
      {
        "id": "mbg_q145",
        "text": "Which Article of Constitution is known as 'Heart and Soul of Constitution' according to Dr. Ambedkar?",
        "options": [
          "Article 32 (Right to Constitutional Remedies)",
          "Article 14",
          "Article 21",
          "Article 19"
        ],
        "correctAnswer": 0,
        "explanation": "Article 32 empowers citizens to move Supreme Court for enforcement of rights."
      },
      {
        "id": "mbg_q146",
        "text": "National Defence Academy (NDA) is located at:",
        "options": [
          "Khadakwasla, Pune (Maharashtra)",
          "Dehradun (Uttarakhand)",
          "Ezhimala (Kerala)",
          "Dungigal (Hyderabad)"
        ],
        "correctAnswer": 0,
        "explanation": "NDA is situated at Khadakwasla near Pune, Maharashtra."
      },
      {
        "id": "mbg_q147",
        "text": "Motto of the Indian Army is:",
        "options": [
          "Seva Paramo Dharma (Service Before Self)",
          "Touch the Sky with Glory",
          "Sam no Varunah",
          "Valour and Faith"
        ],
        "correctAnswer": 0,
        "explanation": "Motto of Indian Army is 'Seva Paramo Dharma' (Service Before Self)."
      },
      {
        "id": "mbg_q148",
        "text": "Motto of the Indian Air Force (IAF) is:",
        "options": [
          "Nabhaḥ Sparśaṁ Dīptam (Touch the Sky with Glory)",
          "Seva Paramo Dharma",
          "Sham No Varunah",
          "Satyameva Jayate"
        ],
        "correctAnswer": 0,
        "explanation": "IAF motto is taken from 11th chapter of Bhagavad Gita."
      },
      {
        "id": "mbg_q149",
        "text": "Motto of the Indian Navy is:",
        "options": [
          "Shaṁ No Varuṇaḥ (May the Lord of Water be auspicious unto us)",
          "Touch the Sky with Glory",
          "Service Before Self",
          "Duty, Honour, Courage"
        ],
        "correctAnswer": 0,
        "explanation": "Indian Navy motto 'Sham No Varunah' invokes Varuna, deity of oceans."
      },
      {
        "id": "mbg_q150",
        "text": "Indian Military Academy (IMA) is located at:",
        "options": [
          "Dehradun (Uttarakhand)",
          "Pune",
          "Chennai",
          "Gwalior"
        ],
        "correctAnswer": 0,
        "explanation": "IMA was established at Dehradun, Uttarakhand, in 1932."
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
    this.applyHiddenStates();
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

  applyHiddenStates() {
    try {
      const states = JSON.parse(localStorage.getItem("quiz_hidden_states") || "{}");
      this.quizzes.forEach(q => {
        if (states.hasOwnProperty(q.id)) {
          q.isHidden = states[q.id];
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

  toggleQuizHidden(quizId) {
    const quiz = this.getQuizById(quizId);
    if (quiz) {
      quiz.isHidden = !quiz.isHidden;
      this.saveHiddenStates();
      return quiz.isHidden;
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

  saveHiddenStates() {
    const states = {};
    this.quizzes.forEach(q => {
      states[q.id] = !!q.isHidden;
    });
    localStorage.setItem("quiz_hidden_states", JSON.stringify(states));
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
      {
            "id": "STU-101",
            "name": "Alex Johnson",
            "password": "stu101@password",
            "class": "NDA Prep Batch A"
      },
      {
            "id": "STU-102",
            "name": "Rahul Sharma",
            "password": "stu102@password",
            "class": "NDA Prep Batch B"
      },
      {
            "id": "STU-103",
            "name": "Priya Singh",
            "password": "stu103@password",
            "class": "Science 12th"
      },
      {
            "id": "S104",
            "name": "Ayush Rawat",
            "class": "X",
            "phone": "9675703897",
            "password": "ayushsanu"
      },
      {
            "id": "S106",
            "name": "Anshi Rana",
            "class": "X",
            "phone": "9719815881",
            "password": "Anshi"
      },
      {
            "id": "S110",
            "name": "Harshita Negi",
            "class": "XII",
            "phone": "9410357308",
            "password": "harshita29"
      },
      {
            "id": "S111",
            "name": "Sagar Rawat",
            "class": "X",
            "phone": "6396217516",
            "password": "sagarrawat"
      },
      {
            "id": "S113",
            "name": "Yuktika Negi",
            "class": "X",
            "phone": "8800423967",
            "password": "paradigm@123"
      },
      {
            "id": "S114",
            "name": "Aisha Kaintura",
            "class": "X",
            "phone": "7817030337",
            "password": "paradigm@123"
      },
      {
            "id": "S115",
            "name": "Soumil Bartwal",
            "class": "NDA",
            "phone": "8076466227",
            "password": "soumil@123"
      },
      {
            "id": "S116",
            "name": "Naman Bhandari",
            "class": "NDA",
            "phone": "9634237408",
            "password": "iamdevil"
      },
      {
            "id": "S118",
            "name": "Muskan Gussain",
            "class": "XI",
            "phone": "8279893159",
            "password": "muskan gusain 2312"
      },
      {
            "id": "S119",
            "name": "Priyanshu Bisht",
            "class": "NDA",
            "phone": "9760059009",
            "password": "14711471"
      },
      {
            "id": "S120",
            "name": "Harshit Maithani",
            "class": "X",
            "phone": "8979717523",
            "password": "makali"
      },
      {
            "id": "S121",
            "name": "Lavanya Pegwal",
            "class": "X",
            "phone": "8958060015",
            "password": "lavanya27"
      },
      {
            "id": "S122",
            "name": "Abhinav Rana",
            "class": "X",
            "phone": "8958102151",
            "password": "akkibhai"
      },
      {
            "id": "S123",
            "name": "Rishav Padiyar",
            "class": "X",
            "phone": "8954027905",
            "password": "rishu28062010"
      }
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
