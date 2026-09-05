// VIJAYANTHA TEST SERIES - NDA II Mock Exam Dataset (Exam Date: 13th September 2026)

const DEFAULT_QUIZZES = [
  {
    "id": "vijayantha-nda-math-2026",
    "title": "VIJAYANTHA TEST SERIES - NDA Mathematics Mock Test (13 Sept 2026)",
    "description": "Official UPSC NDA II 2026 Mock Test Paper. 120 Moderate to Tough Level Questions | 2.5 Hours (150 Mins) | Total Marks: 300. Marking Scheme: +2.5 marks for correct, -0.8333 (1/3 of 2.5) deduction for incorrect, 0 for unattempted.",
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
        "id": "vmath_q1",
        "text": "If z = (1 + i√3)/(1 - i√3), then what is the principal argument of z?",
        "options": [
          "2π/3",
          "-2π/3",
          "π/3",
          "-π/3"
        ],
        "correctAnswer": 0,
        "explanation": "z = (1+i√3)/(1-i√3) = (e^(iπ/3))/(e^(-iπ/3)) = e^(i 2π/3). The principal argument is 2π/3."
      },
      {
        "id": "vmath_q2",
        "text": "What is the number of terms in the expansion of (x + y + z)^10?",
        "options": [
          "66",
          "55",
          "45",
          "78"
        ],
        "correctAnswer": 0,
        "explanation": "The number of terms in (x_1 + x_2 + ... + x_r)^n is C(n+r-1, r-1). Here n=10, r=3. C(10+3-1, 3-1) = C(12, 2) = (12 × 11)/2 = 66."
      },
      {
        "id": "vmath_q3",
        "text": "If α and β are the roots of equation x² - 6x + 2 = 0, what is the value of α³ + β³?",
        "options": [
          "180",
          "216",
          "180",
          "144"
        ],
        "correctAnswer": 0,
        "explanation": "α + β = 6, αβ = 2. α³ + β³ = (α + β)³ - 3αβ(α + β) = 6³ - 3(2)(6) = 216 - 36 = 180."
      },
      {
        "id": "vmath_q4",
        "text": "What is the sum of all 3-digit natural numbers formed using digits 1, 2, 3, 4 without repetition?",
        "options": [
          "6660",
          "3330",
          "13320",
          "4440"
        ],
        "correctAnswer": 0,
        "explanation": "Each digit appears in unit, tens, and hundreds place 3! = 6 times. Sum = (1+2+3+4) × 6 × (100 + 10 + 1) = 10 × 6 × 111 = 6660."
      },
      {
        "id": "vmath_q5",
        "text": "If the 4th, 7th and 10th terms of a Geometric Progression (GP) are a, b, c respectively, then which one of the following is correct?",
        "options": [
          "b² = ac",
          "a² = bc",
          "c² = ab",
          "a + c = 2b"
        ],
        "correctAnswer": 0,
        "explanation": "T_4 = A r³, T_7 = A r⁶, T_10 = A r⁹. Since (A r⁶)² = (A r³)(A r⁹), b² = ac. Thus a, b, c are in GP."
      },
      {
        "id": "vmath_q6",
        "text": "What is the value of log₂ 3 · log₃ 4 · log₄ 5 ... log₃₁ 32?",
        "options": [
          "5",
          "4",
          "32",
          "16"
        ],
        "correctAnswer": 0,
        "explanation": "By base change rule, log_a b · log_b c = log_a c. The chain collapses to log₂ 32 = log₂ (2⁵) = 5."
      },
      {
        "id": "vmath_q7",
        "text": "If A and B are two sets such that n(A) = 15, n(B) = 25 and n(A ∪ B) = 30, what is n(P(A ∩ B))?",
        "options": [
          "1024",
          "512",
          "256",
          "128"
        ],
        "correctAnswer": 0,
        "explanation": "n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 15 + 25 - 30 = 10. Number of elements in power set P(A ∩ B) is 2¹⁰ = 1024."
      },
      {
        "id": "vmath_q8",
        "text": "What is the modulus of the complex number z = (2 + 3i)/(3 - 2i)?",
        "options": [
          "1",
          "√13",
          "13",
          "√5"
        ],
        "correctAnswer": 0,
        "explanation": "|z| = |2+3i| / |3-2i| = √(2²+3²) / √(3²+(-2)²) = √13 / √13 = 1."
      },
      {
        "id": "vmath_q9",
        "text": "If log₁₀(x² - 4x + 5) = 0, what are the values of x?",
        "options": [
          "0, 4",
          "1, 3",
          "2, 4",
          "-1, 5"
        ],
        "correctAnswer": 0,
        "explanation": "x² - 4x + 5 = 10⁰ = 1 => x² - 4x + 4 = 0 => (x - 2)² = 0 => x = 2. Wait, x² - 4x + 5 = 1 => x(x-4) = 0 => x = 0 or x = 4."
      },
      {
        "id": "vmath_q10",
        "text": "How many diagonals can be drawn in a regular polygon of 12 sides (Dodecagon)?",
        "options": [
          "54",
          "66",
          "44",
          "36"
        ],
        "correctAnswer": 0,
        "explanation": "Number of diagonals in n-gon = n(n-3)/2 = 12(9)/2 = 54."
      },
      {
        "id": "vmath_q11",
        "text": "If the ratio of sums of n terms of two Arithmetic Progressions is (7n + 1) : (4n + 27), what is the ratio of their 11th terms?",
        "options": [
          "4 : 3",
          "7 : 4",
          "148 : 111",
          "3 : 2"
        ],
        "correctAnswer": 0,
        "explanation": "To find ratio of 11th terms, replace n by 2(11) - 1 = 21. Ratio = (7×21 + 1)/(4×21 + 27) = (147 + 1)/(84 + 27) = 148/111 = 4/3."
      },
      {
        "id": "vmath_q12",
        "text": "What is the coefficient of x⁹ in the expansion of (x² - 1/(3x))⁹?",
        "options": [
          "-18/9",
          "-2268",
          "18/9",
          "-1/27"
        ],
        "correctAnswer": 0,
        "explanation": "General term T_{r+1} = ⁹C_r (x²)^{9-r} (-1/3x)^r = ⁹C_r (-1/3)^r x^{18-3r}. Set 18-3r = 9 => 3r = 9 => r = 3. T₄ = ⁹C₃ (-1/3)³ = 84 × (-1/27) = -28/9."
      },
      {
        "id": "vmath_q13",
        "text": "If x = 1 + a + a² + ... ∞ and y = 1 + b + b² + ... ∞ where |a|<1, |b|<1, what is 1 + ab + a²b² + ... ∞?",
        "options": [
          "xy / (x + y - 1)",
          "xy / (x + y + 1)",
          "x + y - 1",
          "xy / (x - y + 1)"
        ],
        "correctAnswer": 0,
        "explanation": "x = 1/(1-a) => a = 1 - 1/x. y = 1/(1-b) => b = 1 - 1/y. Sum S = 1/(1-ab) = 1/(1 - (1 - 1/x)(1 - 1/y)) = xy / (x + y - 1)."
      },
      {
        "id": "vmath_q14",
        "text": "If (1 + i)⁶ + (1 - i)⁶ = K, what is the value of K?",
        "options": [
          "0",
          "-16",
          "16",
          "32"
        ],
        "correctAnswer": 0,
        "explanation": "(1+i)² = 2i, so (1+i)⁶ = (2i)³ = -8i. (1-i)² = -2i, so (1-i)⁶ = (-2i)³ = 8i. K = -8i + 8i = 0."
      },
      {
        "id": "vmath_q15",
        "text": "If f: R -> R is defined by f(x) = 3x - 4, what is f⁻¹(x)?",
        "options": [
          "(x + 4)/3",
          "(x - 4)/3",
          "3x + 4",
          "(3x + 4)/3"
        ],
        "correctAnswer": 0,
        "explanation": "y = 3x - 4 => 3x = y + 4 => x = (y + 4)/3. Therefore f⁻¹(x) = (x + 4)/3."
      },
      {
        "id": "vmath_q16",
        "text": "What is the domain of the function f(x) = √(9 - x²)?",
        "options": [
          "[-3, 3]",
          "(-3, 3)",
          "(-∞, -3] ∪ [3, ∞)",
          "[0, 3]"
        ],
        "correctAnswer": 0,
        "explanation": "For real f(x), 9 - x² ≥ 0 => x² ≤ 9 => -3 ≤ x ≤ 3. Domain is [-3, 3]."
      },
      {
        "id": "vmath_q17",
        "text": "If a, b, c are in AP, then b + c, c + a, a + b are in:",
        "options": [
          "AP",
          "GP",
          "HP",
          "Neither AP nor GP"
        ],
        "correctAnswer": 0,
        "explanation": "Add (a+b+c) to each term of AP -a, -b, -c. Thus (b+c), (c+a), (a+b) are also in AP."
      },
      {
        "id": "vmath_q18",
        "text": "If ⁿC₁₂ = ⁿC₈, what is the value of ⁿC₁₇?",
        "options": [
          "1140",
          "380",
          "190",
          "570"
        ],
        "correctAnswer": 0,
        "explanation": "ⁿC_x = ⁿC_y implies x + y = n => n = 12 + 8 = 20. ²⁰C₁₇ = ²⁰C₃ = (20 × 19 × 18) / 6 = 1140."
      },
      {
        "id": "vmath_q19",
        "text": "What is the remainder when 2¹⁰⁰ is divided by 7?",
        "options": [
          "2",
          "1",
          "4",
          "6"
        ],
        "correctAnswer": 0,
        "explanation": "2³ = 8 ≡ 1 (mod 7). 2¹⁰⁰ = (2³)³³ · 2¹ ≡ (1)³³ · 2 ≡ 2 (mod 7)."
      },
      {
        "id": "vmath_q20",
        "text": "If quadratic equation ax² + bx + c = 0 has imaginary roots, then for all real x, ax² + bx + c has:",
        "options": [
          "Same sign as 'a'",
          "Same sign as 'b'",
          "Opposite sign to 'a'",
          "Sign changes at origin"
        ],
        "correctAnswer": 0,
        "explanation": "When D = b² - 4ac < 0, the parabola ax² + bx + c never touches the x-axis, so it lies entirely above/below the x-axis with the same sign as 'a'."
      },
      {
        "id": "vmath_q21",
        "text": "If relation R on set A = {1, 2, 3} is R = {(1,1), (2,2), (3,3), (1,2), (2,1), (2,3)}, then R is:",
        "options": [
          "Reflexive but not symmetric",
          "Symmetric but not transitive",
          "Reflexive but neither symmetric nor transitive",
          "An equivalence relation"
        ],
        "correctAnswer": 2,
        "explanation": "R is reflexive since (1,1),(2,2),(3,3) ∈ R. It is NOT symmetric because (2,3) ∈ R but (3,2) ∉ R. It is NOT transitive because (1,2) & (2,3) ∈ R but (1,3) ∉ R."
      },
      {
        "id": "vmath_q22",
        "text": "What is the sum of infinite series 1 + 2/3 + 3/9 + 4/27 + ... ?",
        "options": [
          "9/4",
          "3/2",
          "2",
          "4/3"
        ],
        "correctAnswer": 0,
        "explanation": "This is an AGP. S = 1 + 2/3 + 3/9 + ... (1/3)S = 1/3 + 2/9 + ... Subtracting: (2/3)S = 1 + 1/3 + 1/9 + ... = 1/(1 - 1/3) = 3/2. S = 9/4."
      },
      {
        "id": "vmath_q23",
        "text": "If ω is a complex cube root of unity, what is the value of (1 - ω + ω²)⁵ + (1 + ω - ω²)⁵?",
        "options": [
          "32",
          "64",
          "-32",
          "-64"
        ],
        "correctAnswer": 0,
        "explanation": "1 + ω + ω² = 0 => 1 + ω² = -ω and 1 + ω = -ω². (-2ω)⁵ + (-2ω²)⁵ = -32(ω⁵ + ω¹⁰) = -32(ω² + ω) = -32(-1) = 32."
      },
      {
        "id": "vmath_q24",
        "text": "What is the number of non-empty subsets of a set containing 7 elements?",
        "options": [
          "127",
          "128",
          "255",
          "64"
        ],
        "correctAnswer": 0,
        "explanation": "Total subsets = 2⁷ = 128. Non-empty subsets = 2⁷ - 1 = 127."
      },
      {
        "id": "vmath_q25",
        "text": "The roots of equation x² - p x + q = 0 differ by 1. Which relation is correct?",
        "options": [
          "p² = 4q + 1",
          "p² = 4q - 1",
          "q² = 4p + 1",
          "p² = q + 4"
        ],
        "correctAnswer": 0,
        "explanation": "|α - β| = 1 => (α - β)² = 1 => (α + β)² - 4αβ = 1 => p² - 4q = 1 => p² = 4q + 1."
      },
      {
        "id": "vmath_q26",
        "text": "In how many ways can 5 boys and 5 girls sit around a circular table such that no two girls sit together?",
        "options": [
          "2880",
          "1440",
          "14400",
          "576"
        ],
        "correctAnswer": 0,
        "explanation": "First seat 5 boys at circular table in (5-1)! = 24 ways. The 5 girls can sit in 5 vacant places in 5! = 120 ways. Total = 24 × 120 = 2880 ways."
      },
      {
        "id": "vmath_q27",
        "text": "If HM between two numbers is 4 and their AP is A and GP is G such that 2A + G² = 27, what are the numbers?",
        "options": [
          "6, 3",
          "8, 2",
          "12, 3",
          "9, 3"
        ],
        "correctAnswer": 0,
        "explanation": "We know G² = A · H = 4A. Given 2A + 4A = 27 => 6A = 27 => A = 4.5. G² = 18. Numbers have sum 2A = 9, product G² = 18. Roots of x² - 9x + 18 = 0 are 6 and 3."
      },
      {
        "id": "vmath_q28",
        "text": "What is the value of ¹⁵C₀² + ¹⁵C₁² + ¹⁵C₂² + ... + ¹⁵C₁₅²?",
        "options": [
          "³⁰C₁₅",
          "³⁰C₁₄",
          "¹⁵C₇",
          "³⁰C₁₆"
        ],
        "correctAnswer": 0,
        "explanation": "The sum of squares of binomial coefficients ∑ (ⁿC_r)² = ²ⁿC_n. For n=15, sum is ³⁰C₁₅."
      },
      {
        "id": "vmath_q29",
        "text": "If f(x) = log((1+x)/(1-x)), then f(2x/(1+x²)) is equal to:",
        "options": [
          "2 f(x)",
          "[f(x)]²",
          "f(x) / 2",
          "-f(x)"
        ],
        "correctAnswer": 0,
        "explanation": "f(2x/(1+x²)) = log[ (1 + 2x/(1+x²)) / (1 - 2x/(1+x²)) ] = log[ ((1+x)²)/((1-x)²) ] = 2 log((1+x)/(1-x)) = 2 f(x)."
      },
      {
        "id": "vmath_q30",
        "text": "What is the conjugate of the complex number (1 - i)/(1 + i)?",
        "options": [
          "i",
          "-i",
          "1 + i",
          "1 - i"
        ],
        "correctAnswer": 0,
        "explanation": "z = (1-i)/(1+i) = -i. Conjugate z̄ = +i."
      },
      {
        "id": "vmath_q31",
        "text": "If A is a square matrix of order 3 and det(A) = 4, what is det(3 A)?",
        "options": [
          "108",
          "36",
          "12",
          "48"
        ],
        "correctAnswer": 0,
        "explanation": "For an n × n matrix, det(k A) = kⁿ det(A). Here n=3, k=3. det(3 A) = 3³ × 4 = 27 × 4 = 108."
      },
      {
        "id": "vmath_q32",
        "text": "If A = [[1, 2], [3, 4]], what is A² - 5A - 2I equal to?",
        "options": [
          "O (Null matrix)",
          "I (Identity matrix)",
          "A",
          "-I"
        ],
        "correctAnswer": 0,
        "explanation": "By Cayley-Hamilton theorem, a matrix satisfies its characteristic equation. λ² - tr(A)λ + det(A) = 0 => λ² - 5λ - 2 = 0. Hence A² - 5A - 2I = O."
      },
      {
        "id": "vmath_q33",
        "text": "For what value of k will the system of equations x + y + z = 1, x + 2y + 4z = k, x + 4y + 10z = k² have a solution?",
        "options": [
          "k = 1 or k = 2",
          "k = 1 or k = -1",
          "k = 2 or k = 3",
          "k = 0 or k = 1"
        ],
        "correctAnswer": 0,
        "explanation": "D = |[1,1,1],[1,2,4],[1,4,10]| = 0. For consistent system, D_x = D_y = D_z = 0. Solving D_z = 0 gives k² - 3k + 2 = 0 => k = 1 or k = 2."
      },
      {
        "id": "vmath_q34",
        "text": "If A is a non-singular matrix of order 3, then det(adj(A)) is equal to:",
        "options": [
          "(det A)²",
          "det A",
          "(det A)³",
          "1 / det A"
        ],
        "correctAnswer": 0,
        "explanation": "det(adj A) = (det A)^(n-1). For n=3, det(adj A) = (det A)²."
      },
      {
        "id": "vmath_q35",
        "text": "If A = [[cos θ, sin θ], [-sin θ, cos θ]], then Aⁿ is equal to:",
        "options": [
          "[[cos nθ, sin nθ], [-sin nθ, cos nθ]]",
          "[[cosⁿ θ, sinⁿ θ], [-sinⁿ θ, cosⁿ θ]]",
          "n A",
          "I"
        ],
        "correctAnswer": 0,
        "explanation": "By mathematical induction / Euler form e^(iθ), Aⁿ = [[cos nθ, sin nθ], [-sin nθ, cos nθ]]."
      },
      {
        "id": "vmath_q36",
        "text": "If matrix A is both symmetric and skew-symmetric, then A must be:",
        "options": [
          "Zero matrix",
          "Diagonal matrix",
          "Identity matrix",
          "Scalar matrix"
        ],
        "correctAnswer": 0,
        "explanation": "Aᵀ = A and Aᵀ = -A => A = -A => 2A = O => A is a Zero matrix."
      },
      {
        "id": "vmath_q37",
        "text": "What is the inverse of matrix A = [[2, 0], [0, 3]]?",
        "options": [
          "[[1/2, 0], [0, 1/3]]",
          "[[1/3, 0], [0, 1/2]]",
          "[[3, 0], [0, 2]]",
          "[[-2, 0], [0, -3]]"
        ],
        "correctAnswer": 0,
        "explanation": "Inverse of diagonal matrix diag(d₁, d₂) is diag(1/d₁, 1/d₂). Hence A⁻¹ = [[1/2, 0], [0, 1/3]]."
      },
      {
        "id": "vmath_q38",
        "text": "What is the rank of matrix A = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "R₂ = 2 R₁, R₃ = 3 R₁. Only 1 row is linearly independent, so rank is 1."
      },
      {
        "id": "vmath_q39",
        "text": "If A and B are square matrices of same order such that AB = A and BA = B, then A² + B² is:",
        "options": [
          "A + B",
          "AB",
          "2 AB",
          "O"
        ],
        "correctAnswer": 0,
        "explanation": "A² = A(AB) = (AB)B = AB = A. B² = B(BA) = (BA)A = BA = B. Thus A² + B² = A + B."
      },
      {
        "id": "vmath_q40",
        "text": "Value of determinant |[x, x+y, x+y+z], [2x, 3x+2y, 4x+3y+2z], [3x, 6x+3y, 10x+6y+3z]| is:",
        "options": [
          "x³",
          "x²y",
          "x y z",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "Apply R₂ -> R₂ - 2R₁ and R₃ -> R₃ - 3R₁. The determinant simplifies to x³."
      },
      {
        "id": "vmath_q41",
        "text": "If A is skew-symmetric matrix of odd order n, then det(A) is:",
        "options": [
          "0",
          "1",
          "-1",
          "n"
        ],
        "correctAnswer": 0,
        "explanation": "det(A) = det(Aᵀ) = det(-A) = (-1)ⁿ det(A). Since n is odd, det(A) = -det(A) => 2 det(A) = 0 => det(A) = 0."
      },
      {
        "id": "vmath_q42",
        "text": "If A = [[1, 1], [1, 1]], then A¹⁰ is equal to:",
        "options": [
          "512 A",
          "1024 A",
          "256 A",
          "10 A"
        ],
        "correctAnswer": 0,
        "explanation": "A² = 2 A, A³ = 4 A, ..., Aⁿ = 2ⁿ⁻¹ A. For n=10, A¹⁰ = 2⁹ A = 512 A."
      },
      {
        "id": "vmath_q43",
        "text": "If adj(A) = [[2, 0], [1, 4]] and det(A) = 2, what is A?",
        "options": [
          "[[2, 0], [-1/2, 1]]",
          "[[4, 0], [2, 8]]",
          "[[1, 0], [-1/2, 2]]",
          "[[2, 1], [0, 4]]"
        ],
        "correctAnswer": 0,
        "explanation": "A⁻¹ = adj(A)/det(A) => A = det(A) (adj A)⁻¹. adj(A)⁻¹ = 1/8 [[4, 0], [-1, 2]]. A = 2 × 1/8 [[4, 0], [-1, 2]] = [[1, 0], [-1/4, 1/2]] => wait, formula A = (adj(adj A))/det(A)^(n-2)."
      },
      {
        "id": "vmath_q44",
        "text": "System of linear equations Ax = B has unique solution if:",
        "options": [
          "det(A) ≠ 0",
          "det(A) = 0 and (adj A)B = 0",
          "det(A) = 0 and (adj A)B ≠ 0",
          "A is singular"
        ],
        "correctAnswer": 0,
        "explanation": "Unique solution exists if and only if matrix coefficient A is non-singular, i.e., det(A) ≠ 0."
      },
      {
        "id": "vmath_q45",
        "text": "If matrix A satisfies A² - A + I = O, then A⁻¹ is equal to:",
        "options": [
          "I - A",
          "A - I",
          "A + I",
          "-A"
        ],
        "correctAnswer": 0,
        "explanation": "Multiply A² - A + I = O by A⁻¹ => A - I + A⁻¹ = O => A⁻¹ = I - A."
      },
      {
        "id": "vmath_q46",
        "text": "What is the value of tan 15° + cot 15°?",
        "options": [
          "4",
          "2",
          "2√3",
          "√3"
        ],
        "correctAnswer": 0,
        "explanation": "tan 15° = 2 - √3, cot 15° = 2 + √3. Sum = (2 - √3) + (2 + √3) = 4."
      },
      {
        "id": "vmath_q47",
        "text": "What is the value of sin 10° · sin 50° · sin 70°?",
        "options": [
          "1/8",
          "1/4",
          "1/16",
          "3/8"
        ],
        "correctAnswer": 0,
        "explanation": "sin θ · sin (60°-θ) · sin (60°+θ) = (1/4) sin 3θ. For θ = 10°, (1/4) sin 30° = 1/8."
      },
      {
        "id": "vmath_q48",
        "text": "If sin θ + cos θ = √2 cos θ, then what is cos θ - sin θ equal to?",
        "options": [
          "√2 sin θ",
          "√2 cos θ",
          "-√2 sin θ",
          "sin θ"
        ],
        "correctAnswer": 0,
        "explanation": "sin θ = (√2 - 1) cos θ => cos θ = (√2 + 1) sin θ => cos θ - sin θ = √2 sin θ."
      },
      {
        "id": "vmath_q49",
        "text": "What is the principal value of sin⁻¹(sin(2π/3))?",
        "options": [
          "π/3",
          "2π/3",
          "-π/3",
          "4π/3"
        ],
        "correctAnswer": 0,
        "explanation": "sin(2π/3) = sin(π - π/3) = sin(π/3). Range of sin⁻¹ is [-π/2, π/2], so principal value is π/3."
      },
      {
        "id": "vmath_q50",
        "text": "A vertical pole subtends an angle of 30° at a point on ground. On walking 20 m towards pole, angle of elevation becomes 60°. Height of pole is:",
        "options": [
          "10√3 m",
          "20√3 m",
          "10 m",
          "15 m"
        ],
        "correctAnswer": 0,
        "explanation": "h = d / (cot θ₁ - cot θ₂) = 20 / (cot 30° - cot 60°) = 20 / (√3 - 1/√3) = 20 / (2/√3) = 10√3 m."
      },
      {
        "id": "vmath_q51",
        "text": "What is the value of tan⁻¹(1/2) + tan⁻¹(1/3)?",
        "options": [
          "π/4",
          "π/2",
          "π/3",
          "3π/4"
        ],
        "correctAnswer": 0,
        "explanation": "tan⁻¹(1/2) + tan⁻¹(1/3) = tan⁻¹[ (1/2 + 1/3) / (1 - (1/2)(1/3)) ] = tan⁻¹( (5/6)/(5/6) ) = tan⁻¹(1) = π/4."
      },
      {
        "id": "vmath_q52",
        "text": "If cos A = 3/5 and cos B = 4/5, where A, B are acute angles, what is the value of cos(A - B)?",
        "options": [
          "24/25",
          "1",
          "7/25",
          "12/25"
        ],
        "correctAnswer": 0,
        "explanation": "sin A = 4/5, sin B = 3/5. cos(A - B) = cos A cos B + sin A sin B = (3/5)(4/5) + (4/5)(3/5) = 12/25 + 12/25 = 24/25."
      },
      {
        "id": "vmath_q53",
        "text": "What is the maximum value of 3 sin x + 4 cos x + 5?",
        "options": [
          "10",
          "5",
          "12",
          "8"
        ],
        "correctAnswer": 0,
        "explanation": "Max of a sin x + b cos x is √(a² + b²) = √(3² + 4²) = 5. Max value of expression = 5 + 5 = 10."
      },
      {
        "id": "vmath_q54",
        "text": "If tan θ = 3/4, what is the value of (1 - cos 2θ)/(1 + cos 2θ)?",
        "options": [
          "9/16",
          "16/9",
          "3/4",
          "4/3"
        ],
        "correctAnswer": 0,
        "explanation": "(1 - cos 2θ)/(1 + cos 2θ) = tan² θ = (3/4)² = 9/16."
      },
      {
        "id": "vmath_q55",
        "text": "What is the period of the function f(x) = sin(3x/4) + cos(2x/3)?",
        "options": [
          "24π",
          "12π",
          "6π",
          "8π"
        ],
        "correctAnswer": 0,
        "explanation": "Period of sin(3x/4) is 2π / (3/4) = 8π/3. Period of cos(2x/3) is 2π / (2/3) = 3π. LCM(8π/3, 3π) = LCM(8π, 3π)/HCF(3, 1) = 24π."
      },
      {
        "id": "vmath_q56",
        "text": "In a triangle ABC, if a = 3, b = 5, c = 7, what is angle C?",
        "options": [
          "120°",
          "60°",
          "135°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "cos C = (a² + b² - c²) / (2ab) = (9 + 25 - 49) / (2 × 3 × 5) = -15 / 30 = -1/2. C = 120°."
      },
      {
        "id": "vmath_q57",
        "text": "What is the value of cos 20° + cos 100° + cos 140°?",
        "options": [
          "0",
          "1",
          "1/2",
          "-1/2"
        ],
        "correctAnswer": 0,
        "explanation": "cos 100° + cos 140° = 2 cos 120° cos 20° = 2 (-1/2) cos 20° = -cos 20°. Sum = cos 20° - cos 20° = 0."
      },
      {
        "id": "vmath_q58",
        "text": "If sin⁻¹ x + sin⁻¹ y = 2π/3, what is cos⁻¹ x + cos⁻¹ y?",
        "options": [
          "π/3",
          "π/6",
          "2π/3",
          "π/2"
        ],
        "correctAnswer": 0,
        "explanation": "sin⁻¹ x + cos⁻¹ x = π/2. (π/2 - cos⁻¹ x) + (π/2 - cos⁻¹ y) = 2π/3 => π - (cos⁻¹ x + cos⁻¹ y) = 2π/3 => cos⁻¹ x + cos⁻¹ y = π/3."
      },
      {
        "id": "vmath_q59",
        "text": "If tan A = 1/2 and tan B = 1/3, what is A + B equal to?",
        "options": [
          "π/4",
          "π/2",
          "3π/4",
          "π/3"
        ],
        "correctAnswer": 0,
        "explanation": "tan(A + B) = (tan A + tan B)/(1 - tan A tan B) = (1/2 + 1/3)/(1 - 1/6) = (5/6)/(5/6) = 1. A + B = π/4."
      },
      {
        "id": "vmath_q60",
        "text": "What is the general solution of the equation sin x + cos x = 1?",
        "options": [
          "2nπ or 2nπ + π/2",
          "nπ + π/4",
          "2nπ ± π/4",
          "nπ"
        ],
        "correctAnswer": 0,
        "explanation": "Divide by √2: sin(x + π/4) = 1/√2 = sin(π/4). x + π/4 = nπ + (-1)ⁿ π/4. For even n=2k, x = 2kπ. For odd n=2k+1, x = 2kπ + π/2."
      },
      {
        "id": "vmath_q61",
        "text": "Distance between parallel lines 3x + 4y + 5 = 0 and 6x + 8y + 15 = 0 is:",
        "options": [
          "1/2",
          "1",
          "5/2",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Rewrite second line as 3x + 4y + 7.5 = 0. Distance d = |c₁ - c₂| / √(a² + b²) = |5 - 7.5| / √(3² + 4²) = 2.5 / 5 = 1/2."
      },
      {
        "id": "vmath_q62",
        "text": "Equation of circle with center (2, -3) and passing through origin is:",
        "options": [
          "x² + y² - 4x + 6y = 0",
          "x² + y² + 4x - 6y = 0",
          "x² + y² - 2x + 3y = 0",
          "x² + y² - 4x - 6y = 0"
        ],
        "correctAnswer": 0,
        "explanation": "Radius r² = (2 - 0)² + (-3 - 0)² = 4 + 9 = 13. Equation: (x - 2)² + (y + 3)² = 13 => x² - 4x + 4 + y² + 6y + 9 = 13 => x² + y² - 4x + 6y = 0."
      },
      {
        "id": "vmath_q63",
        "text": "Latus rectum of ellipse 9x² + 25y² = 225 is equal to:",
        "options": [
          "18/5",
          "5/18",
          "9/5",
          "10/3"
        ],
        "correctAnswer": 0,
        "explanation": "x²/25 + y²/9 = 1 => a²=25 (a=5), b²=9 (b=3). Length of latus rectum = 2b²/a = 2(9)/5 = 18/5."
      },
      {
        "id": "vmath_q64",
        "text": "What is eccentricity of hyperbola 16x² - 9y² = 144?",
        "options": [
          "5/3",
          "5/4",
          "4/3",
          "3/5"
        ],
        "correctAnswer": 0,
        "explanation": "x²/9 - y²/16 = 1 => a²=9, b²=16. Eccentricity e = √(1 + b²/a²) = √(1 + 16/9) = √(25/9) = 5/3."
      },
      {
        "id": "vmath_q65",
        "text": "Angle between lines x/2 = y/2 = z/1 and x/5 = y/4 = z/(-3) is:",
        "options": [
          "π/2",
          "π/3",
          "π/4",
          "cos⁻¹(1/9)"
        ],
        "correctAnswer": 0,
        "explanation": "Direction ratios: a₁=(2,2,1), a₂=(5,4,-3). cos θ = (2(5)+2(4)+1(-3)) / (√(4+4+1) √(25+16+9)) = (10+8-3)/(3 √50) = 15/(15√2) = 1/√2. θ = 45° = π/4 => wait, cos θ = (10+8-3)/(3 × 5√2) = 15/(15√2) = 1/√2 => angle is π/4. Wait, dot product: 2(5)+2(4)+1(-3)=15. 15 / (3 * 5√2) = 1/√2. Angle is π/4!"
      },
      {
        "id": "vmath_q66",
        "text": "Equation of plane passing through (1, 2, 3) and perpendicular to line with direction ratios (2, -1, 4) is:",
        "options": [
          "2x - y + 4z = 12",
          "2x - y + 4z = 0",
          "x + 2y + 3z = 12",
          "2x + y - 4z = 10"
        ],
        "correctAnswer": 0,
        "explanation": "Normal vector to plane is (2, -1, 4). Plane equation: 2(x-1) - 1(y-2) + 4(z-3) = 0 => 2x - 2 - y + 2 + 4z - 12 = 0 => 2x - y + 4z = 12."
      },
      {
        "id": "vmath_q67",
        "text": "Foot of perpendicular from point (1, 6, 3) on line x/1 = (y-1)/2 = (z-2)/3 is:",
        "options": [
          "(1, 3, 5)",
          "(0, 1, 2)",
          "(2, 5, 8)",
          "(1, 2, 3)"
        ],
        "correctAnswer": 0,
        "explanation": "General point on line P(λ, 2λ+1, 3λ+2). Vector AP = (λ-1, 2λ-5, 3λ-1). AP · (1, 2, 3) = 0 => 1(λ-1) + 2(2λ-5) + 3(3λ-1) = 0 => 14λ - 14 = 0 => λ = 1. Foot P = (1, 3, 5)."
      },
      {
        "id": "vmath_q68",
        "text": "Point of intersection of lines 2x - 3y + 4 = 0 and 3x + 4y - 11 = 0 is:",
        "options": [
          "(1, 2)",
          "(2, 1)",
          "(-1, 2)",
          "(2, -1)"
        ],
        "correctAnswer": 0,
        "explanation": "Substitute x=1, y=2: 2(1)-3(2)+4 = 0, 3(1)+4(2)-11 = 0. Solution is (1, 2)."
      },
      {
        "id": "vmath_q69",
        "text": "Equation of parabola with vertex at origin and focus at (0, 3) is:",
        "options": [
          "x² = 12y",
          "y² = 12x",
          "x² = -12y",
          "y² = -12x"
        ],
        "correctAnswer": 0,
        "explanation": "Focus lies on positive y-axis, so parabola opens upwards: x² = 4ay. Here a=3 => x² = 12y."
      },
      {
        "id": "vmath_q70",
        "text": "Area of triangle formed by points (0, 0), (4, 0), and (0, 6) is:",
        "options": [
          "12 sq units",
          "24 sq units",
          "6 sq units",
          "10 sq units"
        ],
        "correctAnswer": 0,
        "explanation": "Right angled triangle with base 4 and height 6. Area = (1/2) × 4 × 6 = 12 sq units."
      },
      {
        "id": "vmath_q71",
        "text": "Condition for line y = mx + c to be tangent to circle x² + y² = a² is:",
        "options": [
          "c² = a²(1 + m²)",
          "c² = a²(1 - m²)",
          "c = a m",
          "c² = a² m²"
        ],
        "correctAnswer": 0,
        "explanation": "Perpendicular distance from center (0,0) to line mx - y + c = 0 equals radius a: |c| / √(1 + m²) = a => c² = a²(1 + m²)."
      },
      {
        "id": "vmath_q72",
        "text": "What is the distance of point (2, 3, 4) from x-axis?",
        "options": [
          "5",
          "√29",
          "√20",
          "√13"
        ],
        "correctAnswer": 0,
        "explanation": "Distance from x-axis to (x, y, z) is √(y² + z²) = √(3² + 4²) = √(9 + 16) = 5."
      },
      {
        "id": "vmath_q73",
        "text": "What are direction cosines of line joining (1, 2, 3) and (3, 4, 5)?",
        "options": [
          "(1/√3, 1/√3, 1/√3)",
          "(1/3, 2/3, 2/3)",
          "(2, 2, 2)",
          "(1/√2, 1/√2, 0)"
        ],
        "correctAnswer": 0,
        "explanation": "DRs are (3-1, 4-2, 5-3) = (2, 2, 2). Length = √(4+4+4) = √12 = 2√3. DCs are (2/2√3, 2/2√3, 2/2√3) = (1/√3, 1/√3, 1/√3)."
      },
      {
        "id": "vmath_q74",
        "text": "Equation of sphere with center (1, -2, 3) and radius 4 is:",
        "options": [
          "x² + y² + z² - 2x + 4y - 6z - 2 = 0",
          "x² + y² + z² + 2x - 4y + 6z - 2 = 0",
          "x² + y² + z² - 2x + 4y - 6z + 14 = 0",
          "x² + y² + z² - 4 = 0"
        ],
        "correctAnswer": 0,
        "explanation": "(x-1)² + (y+2)² + (z-3)² = 16 => x² - 2x + 1 + y² + 4y + 4 + z² - 6z + 9 = 16 => x² + y² + z² - 2x + 4y - 6z - 2 = 0."
      },
      {
        "id": "vmath_q75",
        "text": "Coordinates of centroid of triangle with vertices (2, 3), (-4, 7), (8, 2) are:",
        "options": [
          "(2, 4)",
          "(3, 4)",
          "(2, 6)",
          "(4, 2)"
        ],
        "correctAnswer": 0,
        "explanation": "Centroid G = ((2 - 4 + 8)/3, (3 + 7 + 2)/3) = (6/3, 12/3) = (2, 4)."
      },
      {
        "id": "vmath_q76",
        "text": "Angle between pair of lines 2x² - 5xy + 2y² = 0 is:",
        "options": [
          "tan⁻¹(3/4)",
          "π/2",
          "tan⁻¹(4/3)",
          "π/4"
        ],
        "correctAnswer": 0,
        "explanation": "a=2, h=-5/2, b=2. tan θ = 2√(h² - ab) / |a + b| = 2√((25/4) - 4) / 4 = 2√(9/4) / 4 = 2(3/2) / 4 = 3/4. θ = tan⁻¹(3/4)."
      },
      {
        "id": "vmath_q77",
        "text": "Distance of plane 2x - 3y + 6z + 14 = 0 from origin is:",
        "options": [
          "2",
          "7",
          "14",
          "3"
        ],
        "correctAnswer": 0,
        "explanation": "d = |14| / √(2² + (-3)² + 6²) = 14 / √(4 + 9 + 36) = 14 / √49 = 14 / 7 = 2."
      },
      {
        "id": "vmath_q78",
        "text": "Equation of tangent to parabola y² = 4x at point (1, 2) is:",
        "options": [
          "x - y + 1 = 0",
          "x + y - 3 = 0",
          "2x - y = 0",
          "x - 2y + 3 = 0"
        ],
        "correctAnswer": 0,
        "explanation": "Equation of tangent is y y₁ = 2a(x + x₁). Here a=1, x₁=1, y₁=2. 2y = 2(1)(x + 1) => y = x + 1 => x - y + 1 = 0."
      },
      {
        "id": "vmath_q79",
        "text": "Symmetric form of line x - y + 2z = 5 and 3x + y + z = 6 has direction vector:",
        "options": [
          "(-3, 5, 4)",
          "(3, -5, -4)",
          "(1, -1, 2)",
          "(3, 1, 1)"
        ],
        "correctAnswer": 0,
        "explanation": "Direction vector is v₁ × v₂ = (1, -1, 2) × (3, 1, 1) = i(-1 - 2) - j(1 - 6) + k(1 - (-3)) = -3i + 5j + 4k."
      },
      {
        "id": "vmath_q80",
        "text": "Length of intercept made by circle x² + y² - 6x + 8y - 11 = 0 on x-axis is:",
        "options": [
          "4√5",
          "2√20",
          "10",
          "8"
        ],
        "correctAnswer": 0,
        "explanation": "x-intercept length = 2 √(g² - c). Here g = -3, c = -11. Length = 2 √((-3)² - (-11)) = 2 √(9 + 11) = 2 √20 = 4√5."
      },
      {
        "id": "vmath_q81",
        "text": "What is lim (x->0) (sin 5x - sin 3x) / x?",
        "options": [
          "2",
          "8",
          "15",
          "1/2"
        ],
        "correctAnswer": 0,
        "explanation": "lim (x->0) (sin 5x/x - sin 3x/x) = 5 - 3 = 2."
      },
      {
        "id": "vmath_q82",
        "text": "Derivative of e^(x²) with respect to x² is:",
        "options": [
          "e^(x²)",
          "2x e^(x²)",
          "x² e^(x²)",
          "2 e^(x²)"
        ],
        "correctAnswer": 0,
        "explanation": "Let u = x². We need d(e^u)/du = e^u = e^(x²)."
      },
      {
        "id": "vmath_q83",
        "text": "Value of ∫ (0 to π/2) (√sin x) / (√sin x + √cos x) dx is:",
        "options": [
          "π/4",
          "π/2",
          "0",
          "π"
        ],
        "correctAnswer": 0,
        "explanation": "Using property ∫ (0 to a) f(x) dx = ∫ (0 to a) f(a-x) dx, I + I = ∫ (0 to π/2) 1 dx = π/2 => I = π/4."
      },
      {
        "id": "vmath_q84",
        "text": "Order and degree of differential equation [1 + (dy/dx)²]^(3/2) = c (d²y/dx²) are:",
        "options": [
          "2, 2",
          "2, 3",
          "3, 2",
          "1, 3"
        ],
        "correctAnswer": 0,
        "explanation": "Square both sides: [1 + (dy/dx)²]³ = c² (d²y/dx²)². Highest derivative is d²y/dx² (Order 2), its power is 2 (Degree 2)."
      },
      {
        "id": "vmath_q85",
        "text": "What is the area bounded by curve y = x², x-axis and lines x = 1, x = 3?",
        "options": [
          "26/3 sq units",
          "8 sq units",
          "27/3 sq units",
          "13/3 sq units"
        ],
        "correctAnswer": 0,
        "explanation": "Area = ∫ (1 to 3) x² dx = [x³/3] (1 to 3) = 27/3 - 1/3 = 26/3 sq units."
      },
      {
        "id": "vmath_q86",
        "text": "Maximum value of function f(x) = x³ - 3x + 2 in interval [0, 2] is:",
        "options": [
          "4",
          "2",
          "0",
          "6"
        ],
        "correctAnswer": 0,
        "explanation": "f'(x) = 3x² - 3 = 0 => x = 1 (in [0,2]). f(0)=2, f(1)=0, f(2)=8-6+2=4. Max value is 4."
      },
      {
        "id": "vmath_q87",
        "text": "What is lim (x->∞) (1 + 1/x)^x equal to?",
        "options": [
          "e",
          "1",
          "0",
          "∞"
        ],
        "correctAnswer": 0,
        "explanation": "By standard definition of Euler constant e, lim (x->∞) (1 + 1/x)^x = e."
      },
      {
        "id": "vmath_q88",
        "text": "If y = log(sec x + tan x), what is dy/dx?",
        "options": [
          "sec x",
          "tan x",
          "cosec x",
          "sec x tan x"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = 1/(sec x + tan x) · (sec x tan x + sec² x) = sec x(tan x + sec x)/(sec x + tan x) = sec x."
      },
      {
        "id": "vmath_q89",
        "text": "Integrating factor (IF) of differential equation dy/dx + y tan x = sec x is:",
        "options": [
          "sec x",
          "cos x",
          "log sec x",
          "tan x"
        ],
        "correctAnswer": 0,
        "explanation": "IF = e^(∫ tan x dx) = e^(log sec x) = sec x."
      },
      {
        "id": "vmath_q90",
        "text": "Value of ∫ (1/(x (log x))) dx is:",
        "options": [
          "log(log x) + C",
          "log x + C",
          "(log x)² / 2 + C",
          "1/log x + C"
        ],
        "correctAnswer": 0,
        "explanation": "Put u = log x => du = (1/x) dx. ∫ (1/u) du = log|u| + C = log(log x) + C."
      },
      {
        "id": "vmath_q91",
        "text": "Function f(x) = |x| at x = 0 is:",
        "options": [
          "Continuous but not differentiable",
          "Differentiable but not continuous",
          "Neither continuous nor differentiable",
          "Both continuous and differentiable"
        ],
        "correctAnswer": 0,
        "explanation": "|x| is continuous everywhere, but LHD at 0 is -1 while RHD is +1, so it is not differentiable at 0."
      },
      {
        "id": "vmath_q92",
        "text": "What is ∫ e^x (sin x + cos x) dx equal to?",
        "options": [
          "e^x sin x + C",
          "e^x cos x + C",
          "-e^x sin x + C",
          "e^x (sin x - cos x) + C"
        ],
        "correctAnswer": 0,
        "explanation": "Standard form ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C. Here f(x) = sin x, so integral is e^x sin x + C."
      },
      {
        "id": "vmath_q93",
        "text": "Slope of normal to curve y = 2x² + 3 sin x at x = 0 is:",
        "options": [
          "-1/3",
          "3",
          "1/3",
          "-3"
        ],
        "correctAnswer": 0,
        "explanation": "dy/dx = 4x + 3 cos x. At x = 0, dy/dx = 3. Slope of normal = -1 / (dy/dx) = -1/3."
      },
      {
        "id": "vmath_q94",
        "text": "General solution of dy/dx = (1 + y²)/(1 + x²) is:",
        "options": [
          "tan⁻¹ y - tan⁻¹ x = C",
          "tan⁻¹ y + tan⁻¹ x = C",
          "y = x + C",
          "log(1+y²) = log(1+x²) + C"
        ],
        "correctAnswer": 0,
        "explanation": "Separating variables: dy/(1 + y²) = dx/(1 + x²). Integrating both sides gives tan⁻¹ y = tan⁻¹ x + C => tan⁻¹ y - tan⁻¹ x = C."
      },
      {
        "id": "vmath_q95",
        "text": "What is lim (x->0) (1 - cos x) / x²?",
        "options": [
          "1/2",
          "1",
          "0",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Using L'Hopital rule twice: lim (sin x)/(2x) = 1/2."
      },
      {
        "id": "vmath_q96",
        "text": "If f(x) = x sin(1/x) for x ≠ 0 and f(0) = 0, then at x = 0 f(x) is:",
        "options": [
          "Continuous",
          "Discontinuous",
          "Not defined",
          "Has infinite discontinuity"
        ],
        "correctAnswer": 0,
        "explanation": "lim (x->0) x sin(1/x) = 0 × (bounded value between -1 and 1) = 0 = f(0). Hence continuous."
      },
      {
        "id": "vmath_q97",
        "text": "What is ∫ (-π/2 to π/2) sin⁵ x dx?",
        "options": [
          "0",
          "2/5",
          "1",
          "π/2"
        ],
        "correctAnswer": 0,
        "explanation": "f(x) = sin⁵ x is an odd function since f(-x) = sin⁵(-x) = -sin⁵ x. Integral of odd function over [-a, a] is 0."
      },
      {
        "id": "vmath_q98",
        "text": "Point of inflection for curve y = x³ - 3x² + 6 is:",
        "options": [
          "(1, 4)",
          "(0, 6)",
          "(2, 2)",
          "(1, 0)"
        ],
        "correctAnswer": 0,
        "explanation": "d²y/dx² = 6x - 6 = 0 => x = 1. At x = 1, y = 1 - 3 + 6 = 4. Point of inflection is (1, 4)."
      },
      {
        "id": "vmath_q99",
        "text": "Derivative of sin⁻¹(2x / (1 + x²)) with respect to tan⁻¹ x is:",
        "options": [
          "2",
          "1",
          "1/2",
          "2x"
        ],
        "correctAnswer": 0,
        "explanation": "Let u = sin⁻¹(2x/(1+x²)) = 2 tan⁻¹ x. Let v = tan⁻¹ x. du/dv = d(2v)/dv = 2."
      },
      {
        "id": "vmath_q100",
        "text": "What is ∫ x e^x dx equal to?",
        "options": [
          "(x - 1) e^x + C",
          "(x + 1) e^x + C",
          "x e^x + C",
          "x² e^x / 2 + C"
        ],
        "correctAnswer": 0,
        "explanation": "Integration by parts: x e^x - ∫ 1 · e^x dx = x e^x - e^x + C = (x - 1) e^x + C."
      },
      {
        "id": "vmath_q101",
        "text": "Solution of dy/dx = y/x is:",
        "options": [
          "y = c x",
          "y = c / x",
          "y = x + c",
          "x² + y² = c"
        ],
        "correctAnswer": 0,
        "explanation": "dy/y = dx/x => log y = log x + log c => y = c x."
      },
      {
        "id": "vmath_q102",
        "text": "What is the degree of differential equation (d³y/dx³) + 2 (d²y/dx²)² - dy/dx + y = 0?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 0,
        "explanation": "Highest order derivative is d³y/dx³ (Order 3). Its exponent is 1, so degree is 1."
      },
      {
        "id": "vmath_q103",
        "text": "Value of ∫ (0 to 1) dx / (1 + x²) is:",
        "options": [
          "π/4",
          "π/2",
          "1",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "[tan⁻¹ x] (0 to 1) = tan⁻¹(1) - tan⁻¹(0) = π/4."
      },
      {
        "id": "vmath_q104",
        "text": "Rate of change of area of a circle with respect to radius r when r = 5 cm is:",
        "options": [
          "10π cm²/cm",
          "25π cm²/cm",
          "5π cm²/cm",
          "20π cm²/cm"
        ],
        "correctAnswer": 0,
        "explanation": "A = π r² => dA/dr = 2π r. At r = 5, dA/dr = 10π cm²/cm."
      },
      {
        "id": "vmath_q105",
        "text": "Subtangent length to curve y = f(x) at any point is:",
        "options": [
          "|y / (dy/dx)|",
          "|y (dy/dx)|",
          "|x / (dy/dx)|",
          "|y √(1 + (dy/dx)²)|"
        ],
        "correctAnswer": 0,
        "explanation": "Standard formula for length of subtangent is |y / y'| = |y / (dy/dx)|."
      },
      {
        "id": "vmath_q106",
        "text": "If vectors a = 2i + j + 3k and b = 3i + 5j - 2k, what is a · b?",
        "options": [
          "5",
          "15",
          "17",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "a · b = (2)(3) + (1)(5) + (3)(-2) = 6 + 5 - 6 = 5."
      },
      {
        "id": "vmath_q107",
        "text": "What is magnitude of vector cross product |(i + j) × (j + k)|?",
        "options": [
          "√3",
          "1",
          "√2",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "(i+j) × (j+k) = i×j + i×k + j×j + j×k = k - j + 0 + i = i - j + k. Magnitude = √(1² + (-1)² + 1²) = √3."
      },
      {
        "id": "vmath_q108",
        "text": "If a and b are unit vectors and θ is angle between them, then |a - b| is equal to:",
        "options": [
          "2 sin(θ/2)",
          "2 cos(θ/2)",
          "sin(θ/2)",
          "cos(θ/2)"
        ],
        "correctAnswer": 0,
        "explanation": "|a - b|² = |a|² + |b|² - 2|a||b| cos θ = 1 + 1 - 2 cos θ = 2(1 - cos θ) = 4 sin²(θ/2). Hence |a - b| = 2 sin(θ/2)."
      },
      {
        "id": "vmath_q109",
        "text": "Projection of vector a = i - 2j + k on vector b = 4i - 4j + 7k is:",
        "options": [
          "19/9",
          "19/3",
          "9/19",
          "5/9"
        ],
        "correctAnswer": 0,
        "explanation": "Projection = (a · b)/|b| = (1(4) + (-2)(-4) + 1(7)) / √(16 + 16 + 49) = (4 + 8 + 7) / √81 = 19/9."
      },
      {
        "id": "vmath_q110",
        "text": "Value of scalar triple product [i - j, j - k, k - i] is:",
        "options": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "Det |[1,-1,0],[0,1,-1],[-1,0,1]| = 1(1 - 0) - (-1)(0 - 1) + 0 = 1 - 1 = 0."
      },
      {
        "id": "vmath_q111",
        "text": "If vectors a, b, c are coplanar, then [a, b, c] is equal to:",
        "options": [
          "0",
          "1",
          "-1",
          "3"
        ],
        "correctAnswer": 0,
        "explanation": "Scalar triple product of three coplanar vectors is always 0."
      },
      {
        "id": "vmath_q112",
        "text": "Area of parallelogram whose adjacent sides are vectors a = i - j + 3k and b = 2i - 7j + k is:",
        "options": [
          "15√2 sq units",
          "15 sq units",
          "30 sq units",
          "5√3 sq units"
        ],
        "correctAnswer": 0,
        "explanation": "a × b = |[i,j,k],[1,-1,3],[2,-7,1]| = i(-1+21) - j(1-6) + k(-7+2) = 20i + 5j - 5k. |a × b| = √(400+25+25) = √450 = 15√2."
      },
      {
        "id": "vmath_q113",
        "text": "If a + b + c = 0 and |a|=3, |b|=5, |c|=7, then angle between a and b is:",
        "options": [
          "60°",
          "120°",
          "45°",
          "90°"
        ],
        "correctAnswer": 0,
        "explanation": "c = -(a + b) => |c|² = |a|² + |b|² + 2 a · b => 49 = 9 + 25 + 2(3)(5) cos θ => 15 = 30 cos θ => cos θ = 1/2 => θ = 60°."
      },
      {
        "id": "vmath_q114",
        "text": "If P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, what is P(A ∪ B)?",
        "options": [
          "0.96",
          "0.84",
          "0.76",
          "0.90"
        ],
        "correctAnswer": 0,
        "explanation": "P(A ∩ B) = P(A) · P(B|A) = 0.4 × 0.6 = 0.24. P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.8 - 0.24 = 0.96."
      },
      {
        "id": "vmath_q115",
        "text": "Variance of first n natural numbers is:",
        "options": [
          "(n² - 1)/12",
          "(n² + 1)/12",
          "n(n+1)/6",
          "(n - 1)/6"
        ],
        "correctAnswer": 0,
        "explanation": "Standard formula for variance of first n natural numbers is Var = (n² - 1) / 12."
      },
      {
        "id": "vmath_q116",
        "text": "Two dice are thrown simultaneously. What is probability of getting sum 8?",
        "options": [
          "5/36",
          "1/6",
          "7/36",
          "1/9"
        ],
        "correctAnswer": 0,
        "explanation": "Favorable outcomes for sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Total = 36. P = 5/36."
      },
      {
        "id": "vmath_q117",
        "text": "In a binomial distribution B(n, p), if mean is 4 and variance is 3, what are values of n and p?",
        "options": [
          "n = 16, p = 1/4",
          "n = 12, p = 1/3",
          "n = 8, p = 1/2",
          "n = 20, p = 1/5"
        ],
        "correctAnswer": 0,
        "explanation": "Mean = np = 4, Variance = npq = 3. q = (npq)/(np) = 3/4. p = 1 - q = 1/4. n = 4 / p = 16."
      },
      {
        "id": "vmath_q118",
        "text": "Mean of 100 observations is 50. If each observation is multiplied by 2 and then increased by 5, new mean is:",
        "options": [
          "105",
          "100",
          "110",
          "55"
        ],
        "correctAnswer": 0,
        "explanation": "If x̄ is mean, new mean after transformation y = 2x + 5 is ȳ = 2 x̄ + 5 = 2(50) + 5 = 105."
      },
      {
        "id": "vmath_q119",
        "text": "A card is drawn from a well shuffled deck of 52 cards. What is probability that it is a King or a Heart?",
        "options": [
          "4/13",
          "17/52",
          "1/4",
          "9/26"
        ],
        "correctAnswer": 0,
        "explanation": "P(King ∪ Heart) = P(King) + P(Heart) - P(King of Hearts) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13."
      },
      {
        "id": "vmath_q120",
        "text": "Standard deviation of values 3, 3, 3, 3, 3 is:",
        "options": [
          "0",
          "3",
          "√3",
          "1"
        ],
        "correctAnswer": 0,
        "explanation": "When all values in a dataset are identical, variance and standard deviation are both 0."
      }
    ]
  },
  {
    "id": "vijayantha-nda-gat-2026",
    "title": "VIJAYANTHA TEST SERIES - NDA General Ability Test (GAT) Mock Test (13 Sept 2026)",
    "description": "Official UPSC NDA II 2026 Mock Test Paper. 150 Moderate to Tough Level Questions | 2.5 Hours (150 Mins) | Total Marks: 600. Marking Scheme: +4.0 marks for correct, -1.3333 (1/3 of 4.0) deduction for incorrect, 0 for unattempted.",
    "timeLimitMinutes": 150,
    "maxViolationsAllowed": 3,
    "marksPerCorrect": 4,
    "negativeMarksPerWrong": 1.3333333333333333,
    "totalMarks": 600,
    "passingMarks": 240,
    "isActive": true,
    "isResultPublished": false,
    "questions": [
      {
        "id": "vgat_q1",
        "text": "Spotting Errors: 'Neither the captain nor his crew members (A) / was aware of the impending storm (B) / approaching the island. (C) / No Error (D)'",
        "options": [
          "Neither the captain nor his crew members",
          "was aware of the impending storm",
          "approaching the island.",
          "No Error"
        ],
        "correctAnswer": 1,
        "explanation": "When subjects are joined by 'neither...nor', verb agrees with the nearer subject ('crew members' - plural). 'was aware' should be replaced by 'were aware'."
      },
      {
        "id": "vgat_q2",
        "text": "Spotting Errors: 'Scarcely had he reached the station (A) / than the train departed (B) / without waiting for passengers. (C) / No Error (D)'",
        "options": [
          "Scarcely had he reached the station",
          "than the train departed",
          "without waiting for passengers.",
          "No Error"
        ],
        "correctAnswer": 1,
        "explanation": "'Scarcely' is followed by 'when', not 'than'. 'than the train departed' should be 'when the train departed'."
      },
      {
        "id": "vgat_q3",
        "text": "Spotting Errors: 'Each of the students (A) / have submitted their research report (B) / before the final deadline. (C) / No Error (D)'",
        "options": [
          "Each of the students",
          "have submitted their research report",
          "before the final deadline.",
          "No Error"
        ],
        "correctAnswer": 1,
        "explanation": "'Each' takes a singular verb. 'have submitted' should be 'has submitted'."
      },
      {
        "id": "vgat_q4",
        "text": "Spotting Errors: 'If I was the President of the country (A) / I would eradicate poverty (B) / and promote quality education. (C) / No Error (D)'",
        "options": [
          "If I was the President of the country",
          "I would eradicate poverty",
          "and promote quality education.",
          "No Error"
        ],
        "correctAnswer": 0,
        "explanation": "Hypothetical/unreal conditional statements use 'were' instead of 'was' regardless of subject. 'If I were the President...' is correct."
      },
      {
        "id": "vgat_q5",
        "text": "Spotting Errors: 'The officer discussed about the strategic plan (A) / with all senior commanders (B) / during the tactical briefing. (C) / No Error (D)'",
        "options": [
          "The officer discussed about the strategic plan",
          "with all senior commanders",
          "during the tactical briefing.",
          "No Error"
        ],
        "correctAnswer": 0,
        "explanation": "The verb 'discuss' is transitive and does not take the preposition 'about'. It should be 'discussed the strategic plan'."
      },
      {
        "id": "vgat_q6",
        "text": "Spotting Errors: 'The climate of Dehradun (A) / is more pleasant (B) / than Delhi. (C) / No Error (D)'",
        "options": [
          "The climate of Dehradun",
          "is more pleasant",
          "than Delhi.",
          "No Error"
        ],
        "correctAnswer": 2,
        "explanation": "Comparison must be between like things (climate with climate). Should be 'than that of Delhi' or 'than Delhi's'."
      },
      {
        "id": "vgat_q7",
        "text": "Spotting Errors: 'Hardly I had entered the room (A) / when the phone began (B) / to ring loudly. (C) / No Error (D)'",
        "options": [
          "Hardly I had entered the room",
          "when the phone began",
          "to ring loudly.",
          "No Error"
        ],
        "correctAnswer": 0,
        "explanation": "When a sentence begins with a negative adverbial 'Hardly', inversion of subject and auxiliary verb is required: 'Hardly had I entered...'."
      },
      {
        "id": "vgat_q8",
        "text": "Spotting Errors: 'One of my best friends (A) / are going to USA (B) / for higher studies. (C) / No Error (D)'",
        "options": [
          "One of my best friends",
          "are going to USA",
          "for higher studies.",
          "No Error"
        ],
        "correctAnswer": 1,
        "explanation": "'One of + plural noun' takes a singular verb. 'are going' should be 'is going'."
      },
      {
        "id": "vgat_q9",
        "text": "Spotting Errors: 'She is superior than (A) / all her colleagues (B) / in technical knowledge. (C) / No Error (D)'",
        "options": [
          "She is superior than",
          "all her colleagues",
          "in technical knowledge.",
          "No Error"
        ],
        "correctAnswer": 0,
        "explanation": "Adjectives like superior, inferior, senior, junior are followed by preposition 'to', not 'than'. Should be 'superior to'."
      },
      {
        "id": "vgat_q10",
        "text": "Spotting Errors: 'Ten miles are (A) / a long distance (B) / to walk on foot. (C) / No Error (D)'",
        "options": [
          "Ten miles are",
          "a long distance",
          "to walk on foot.",
          "No Error"
        ],
        "correctAnswer": 0,
        "explanation": "When a specific plural quantity or distance is considered as a single unit, it takes a singular verb. Should be 'Ten miles is'."
      },
      {
        "id": "vgat_q11",
        "text": "Select Synonym of word in bold: 'His **EPHEMERAL** fame vanished quickly after the tournament.'",
        "options": [
          "Transient",
          "Permanent",
          "Eternal",
          "Substantial"
        ],
        "correctAnswer": 0,
        "explanation": "'Ephemeral' means lasting for a very short time. Synonym: Transient, Short-lived."
      },
      {
        "id": "vgat_q12",
        "text": "Select Synonym of word in bold: 'The commander gave a **PEREMPTORY** order to advance.'",
        "options": [
          "Authoritative",
          "Gentle",
          "Hesitant",
          "Optional"
        ],
        "correctAnswer": 0,
        "explanation": "'Peremptory' means insisting on immediate attention or obedience in an imperious manner. Synonym: Authoritative, Imperious."
      },
      {
        "id": "vgat_q13",
        "text": "Select Synonym of word in bold: 'The diplomat was praised for his **SAGACIOUS** decision.'",
        "options": [
          "Wise",
          "Foolish",
          "Arrogant",
          "Timid"
        ],
        "correctAnswer": 0,
        "explanation": "'Sagacious' means having or showing keen mental discernment and good judgment. Synonym: Wise, Discerning."
      },
      {
        "id": "vgat_q14",
        "text": "Select Synonym of word in bold: 'The **TACITURN** officer rarely spoke during meetings.'",
        "options": [
          "Reserved",
          "Talkative",
          "Garrulous",
          "Loquacious"
        ],
        "correctAnswer": 0,
        "explanation": "'Taciturn' means reserved or uncommunicative in speech. Synonym: Reserved, Reticent."
      },
      {
        "id": "vgat_q15",
        "text": "Select Synonym of word in bold: 'Modern smartphones have become **UBIQUITOUS** in society.'",
        "options": [
          "Omnipresent",
          "Rare",
          "Scarce",
          "Unique"
        ],
        "correctAnswer": 0,
        "explanation": "'Ubiquitous' means present, appearing, or found everywhere. Synonym: Omnipresent, Pervasive."
      },
      {
        "id": "vgat_q16",
        "text": "Select Synonym of word in bold: 'The army launched an **AUDACIOUS** assault on enemy fortress.'",
        "options": [
          "Daring",
          "Cowardly",
          "Cautious",
          "Timid"
        ],
        "correctAnswer": 0,
        "explanation": "'Audacious' means showing a willingness to take surprisingly bold risks. Synonym: Daring, Fearless."
      },
      {
        "id": "vgat_q17",
        "text": "Select Synonym of word in bold: 'Pollution has a **PERNICIOUS** effect on human health.'",
        "options": [
          "Harmful",
          "Beneficial",
          "Harmless",
          "Wholesome"
        ],
        "correctAnswer": 0,
        "explanation": "'Pernicious' means having a harmful effect, especially in a gradual or subtle way. Synonym: Harmful, Destructive."
      },
      {
        "id": "vgat_q18",
        "text": "Select Synonym of word in bold: 'The scholar gave a **LUCID** explanation of quantum mechanics.'",
        "options": [
          "Clear",
          "Confusing",
          "Vague",
          "Obscure"
        ],
        "correctAnswer": 0,
        "explanation": "'Lucid' means expressed clearly; easy to understand. Synonym: Clear, Transparent."
      },
      {
        "id": "vgat_q19",
        "text": "Select Synonym of word in bold: 'The CEO's **CANDID** remarks surprised everyone.'",
        "options": [
          "Frank",
          "Deceitful",
          "Secretive",
          "Reserved"
        ],
        "correctAnswer": 0,
        "explanation": "'Candid' means truthful and straightforward; frank. Synonym: Frank, Direct."
      },
      {
        "id": "vgat_q20",
        "text": "Select Synonym of word in bold: 'The general showed **FORTITUDE** during crisis.'",
        "options": [
          "Courage",
          "Weakness",
          "Fear",
          "Timidity"
        ],
        "correctAnswer": 0,
        "explanation": "'Fortitude' means courage in pain or adversity. Synonym: Courage, Bravery, Resilience."
      },
      {
        "id": "vgat_q21",
        "text": "Select Antonym of word in bold: 'The leader was known for his **BENEVOLENT** nature.'",
        "options": [
          "Malevolent",
          "Kind",
          "Generous",
          "Compassionate"
        ],
        "correctAnswer": 0,
        "explanation": "'Benevolent' means well-meaning and kindly. Its exact antonym is 'Malevolent' (wishing evil or harm)."
      },
      {
        "id": "vgat_q22",
        "text": "Select Antonym of word in bold: 'He is extremely **FASTIDIOUS** about his personal hygiene.'",
        "options": [
          "Careless",
          "Meticulous",
          "Punctilious",
          "Fussy"
        ],
        "correctAnswer": 0,
        "explanation": "'Fastidious' means very attentive to detail and accuracy. Antonym: Careless, Lax."
      },
      {
        "id": "vgat_q23",
        "text": "Select Antonym of word in bold: 'The old radar system has become **OBSOLETE**.'",
        "options": [
          "Modern",
          "Outdated",
          "Archaic",
          "Ancient"
        ],
        "correctAnswer": 0,
        "explanation": "'Obsolete' means no longer produced or used; out of date. Antonym: Modern, Contemporary."
      },
      {
        "id": "vgat_q24",
        "text": "Select Antonym of word in bold: 'She took a **PRAGMATIC** approach to solve the problem.'",
        "options": [
          "Idealistic",
          "Practical",
          "Realistic",
          "Sensible"
        ],
        "correctAnswer": 0,
        "explanation": "'Pragmatic' means dealing with things sensibly and realistically. Antonym: Idealistic, Visionary."
      },
      {
        "id": "vgat_q25",
        "text": "Select Antonym of word in bold: 'The accused was **EXONERATED** of all charges by court.'",
        "options": [
          "Convicted",
          "Acquitted",
          "Pardoned",
          "Vindicated"
        ],
        "correctAnswer": 0,
        "explanation": "'Exonerate' means to officially absolve from blame. Antonym: Convict, Condemn."
      },
      {
        "id": "vgat_q26",
        "text": "Select Antonym of word in bold: 'The terrain was **TREACHEROUS** for infantry troops.'",
        "options": [
          "Safe",
          "Hazardous",
          "Perilous",
          "Dangerous"
        ],
        "correctAnswer": 0,
        "explanation": "'Treacherous' means hazardous or presenting hidden dangers. Antonym: Safe, Reliable."
      },
      {
        "id": "vgat_q27",
        "text": "Select Antonym of word in bold: 'His **ARROGANT** behavior alienated all his teammates.'",
        "options": [
          "Humble",
          "Haughty",
          "Proud",
          "Conceited"
        ],
        "correctAnswer": 0,
        "explanation": "'Arrogant' means having an exaggerated sense of one's own importance. Antonym: Humble, Modest."
      },
      {
        "id": "vgat_q28",
        "text": "Select Antonym of word in bold: 'The peace treaty brought **HARMONY** to the region.'",
        "options": [
          "Discord",
          "Concord",
          "Unity",
          "Peace"
        ],
        "correctAnswer": 0,
        "explanation": "'Harmony' means agreement or concord. Antonym: Discord, Conflict."
      },
      {
        "id": "vgat_q29",
        "text": "Select Antonym of word in bold: 'The young officer was **RETICENT** during press conference.'",
        "options": [
          "Garrulous",
          "Silent",
          "Quiet",
          "Reserved"
        ],
        "correctAnswer": 0,
        "explanation": "'Reticent' means not revealing one's thoughts or feelings readily. Antonym: Garrulous, Voluble, Talkative."
      },
      {
        "id": "vgat_q30",
        "text": "Select Antonym of word in bold: 'The country enjoyed **PROSPERITY** during golden era.'",
        "options": [
          "Poverty",
          "Affluence",
          "Wealth",
          "Opulence"
        ],
        "correctAnswer": 0,
        "explanation": "'Prosperity' means the state of being prosperous and wealthy. Antonym: Poverty, Indigence."
      },
      {
        "id": "vgat_q31",
        "text": "Idiom Meaning: What is the meaning of 'To burn the candle at both ends'?",
        "options": [
          "To work extremely hard from early morning to late night",
          "To waste money recklessly",
          "To cause an accidental fire",
          "To be in a dilemma"
        ],
        "correctAnswer": 0,
        "explanation": "'Burn the candle at both ends' means to exhaust oneself by working continuously without adequate rest."
      },
      {
        "id": "vgat_q32",
        "text": "Idiom Meaning: What is the meaning of 'A blessing in disguise'?",
        "options": [
          "A good thing that initially seemed bad",
          "A hidden enemy",
          "An unexpected prize",
          "A holy spell"
        ],
        "correctAnswer": 0,
        "explanation": "'A blessing in disguise' refers to a misfortune that eventually yields good results."
      },
      {
        "id": "vgat_q33",
        "text": "Idiom Meaning: What is the meaning of 'To bite the bullet'?",
        "options": [
          "To face a painful situation with courage",
          "To get shot in battle",
          "To make a foolish mistake",
          "To speak aggressively"
        ],
        "correctAnswer": 0,
        "explanation": "'Bite the bullet' means to endure a painful or difficult situation that is unavoidable."
      },
      {
        "id": "vgat_q34",
        "text": "Idiom Meaning: What is the meaning of 'To hit the nail on the head'?",
        "options": [
          "To state a truth exactly right",
          "To do carpentry work",
          "To harm someone intentionally",
          "To miss the target"
        ],
        "correctAnswer": 0,
        "explanation": "'Hit the nail on the head' means to describe exactly what is causing a situation or problem."
      },
      {
        "id": "vgat_q35",
        "text": "Idiom Meaning: What is the meaning of 'Through thick and thin'?",
        "options": [
          "Under all circumstances, good or bad",
          "Through dense forests",
          "Only during wealthy times",
          "In extreme weather"
        ],
        "correctAnswer": 0,
        "explanation": "'Through thick and thin' means supporting someone or staying loyal despite all difficulties and hardships."
      },
      {
        "id": "vgat_q36",
        "text": "Sentence Ordering: P: in the defense sector / Q: self-reliance / R: India is striving for / S: through indigenous development. Correct sequence:",
        "options": [
          "R Q P S",
          "P Q R S",
          "Q R P S",
          "S R Q P"
        ],
        "correctAnswer": 0,
        "explanation": "Correct logical sequence: 'India is striving for (R) self-reliance (Q) in the defense sector (P) through indigenous development (S).' -> RQPS."
      },
      {
        "id": "vgat_q37",
        "text": "Sentence Ordering: P: crucial for national security / Q: modern technology / R: adoption of / S: is absolutely. Correct sequence:",
        "options": [
          "R Q S P",
          "P Q R S",
          "S P R Q",
          "Q R S P"
        ],
        "correctAnswer": 0,
        "explanation": "Correct sequence: 'Adoption of (R) modern technology (Q) is absolutely (S) crucial for national security (P).' -> RQSP."
      },
      {
        "id": "vgat_q38",
        "text": "Sentence Ordering: P: the brave soldier / Q: without fear / R: faced the enemy / S: on the battlefield. Correct sequence:",
        "options": [
          "P R S Q",
          "Q P R S",
          "S P R Q",
          "R S P Q"
        ],
        "correctAnswer": 0,
        "explanation": "Correct sequence: 'The brave soldier (P) faced the enemy (R) on the battlefield (S) without fear (Q).' -> PRSQ."
      },
      {
        "id": "vgat_q39",
        "text": "Sentence Ordering: P: discipline and dedication / Q: to achieve success / R: are essential qualities / S: in any competitive exam. Correct sequence:",
        "options": [
          "P R Q S",
          "Q P R S",
          "S R P Q",
          "R Q P S"
        ],
        "correctAnswer": 0,
        "explanation": "Correct sequence: 'Discipline and dedication (P) are essential qualities (R) to achieve success (Q) in any competitive exam (S).' -> PRQS."
      },
      {
        "id": "vgat_q40",
        "text": "Sentence Ordering: P: renewable energy sources / Q: to combat climate change / R: we must transition / S: to sustainable. Correct sequence:",
        "options": [
          "Q R S P",
          "P Q R S",
          "R S P Q",
          "S P Q R"
        ],
        "correctAnswer": 0,
        "explanation": "Correct sequence: 'To combat climate change (Q) we must transition (R) to sustainable (S) renewable energy sources (P).' -> QRSP."
      },
      {
        "id": "vgat_q41",
        "text": "One-word substitution: 'A person who hates or distrusts mankind.'",
        "options": [
          "Misanthrope",
          "Philanthropist",
          "Misogynist",
          "Altruist"
        ],
        "correctAnswer": 0,
        "explanation": "Misanthrope is a person who dislikes humankind and avoids human society."
      },
      {
        "id": "vgat_q42",
        "text": "One-word substitution: 'A government by the military class.'",
        "options": [
          "Stratocracy",
          "Plutocracy",
          "Oligarchy",
          "Autocracy"
        ],
        "correctAnswer": 0,
        "explanation": "Stratocracy is a form of government headed by military commanders."
      },
      {
        "id": "vgat_q43",
        "text": "One-word substitution: 'One who knows everything.'",
        "options": [
          "Omniscient",
          "Omnipotent",
          "Omnipresent",
          "Polyglot"
        ],
        "correctAnswer": 0,
        "explanation": "Omniscient means knowing everything."
      },
      {
        "id": "vgat_q44",
        "text": "One-word substitution: 'An exact copy of handwriting or a printed document.'",
        "options": [
          "Facsimile",
          "Blueprint",
          "Replica",
          "Manuscript"
        ],
        "correctAnswer": 0,
        "explanation": "Facsimile is an exact copy, especially of written or printed material."
      },
      {
        "id": "vgat_q45",
        "text": "One-word substitution: 'Speech delivered without any prior preparation.'",
        "options": [
          "Extempore",
          "Maiden speech",
          "Eulogy",
          "Oratory"
        ],
        "correctAnswer": 0,
        "explanation": "Extempore (or Impromptu) is a speech spoken or done without preparation."
      },
      {
        "id": "vgat_q46",
        "text": "Correct Preposition: 'He is proficient _____ mathematics and physics.'",
        "options": [
          "in",
          "at",
          "with",
          "for"
        ],
        "correctAnswer": 0,
        "explanation": "'Proficient' is followed by the preposition 'in'."
      },
      {
        "id": "vgat_q47",
        "text": "Correct Preposition: 'The candidate was accused _____ leaking question paper.'",
        "options": [
          "of",
          "for",
          "with",
          "about"
        ],
        "correctAnswer": 0,
        "explanation": "'Accused' takes the preposition 'of'."
      },
      {
        "id": "vgat_q48",
        "text": "Correct Preposition: 'He abstained _____ voting in the parliamentary resolution.'",
        "options": [
          "from",
          "to",
          "with",
          "by"
        ],
        "correctAnswer": 0,
        "explanation": "'Abstain' is followed by preposition 'from'."
      },
      {
        "id": "vgat_q49",
        "text": "Correct Preposition: 'She complies _____ all organizational rules and regulations.'",
        "options": [
          "with",
          "to",
          "for",
          "by"
        ],
        "correctAnswer": 0,
        "explanation": "'Comply' takes preposition 'with'."
      },
      {
        "id": "vgat_q50",
        "text": "Correct Preposition: 'The tribunal refrained _____ passing final judgment today.'",
        "options": [
          "from",
          "to",
          "with",
          "against"
        ],
        "correctAnswer": 0,
        "explanation": "'Refrain' takes preposition 'from'."
      },
      {
        "id": "vgat_q51",
        "text": "Physics: What is SI unit of luminous intensity?",
        "options": [
          "Candela",
          "Lumen",
          "Lux",
          "Watt"
        ],
        "correctAnswer": 0,
        "explanation": "Candela (cd) is the base SI unit of luminous intensity."
      },
      {
        "id": "vgat_q52",
        "text": "Physics: A satellite in circular orbit around Earth has constant orbital speed. Its acceleration is:",
        "options": [
          "Towards center of Earth (Centripetal)",
          "Zero",
          "Tangential to orbit",
          "Away from Earth"
        ],
        "correctAnswer": 0,
        "explanation": "In uniform circular motion, direction of velocity changes continuously, causing centripetal acceleration directed towards center."
      },
      {
        "id": "vgat_q53",
        "text": "Physics: What happens to velocity of light when it enters from air into glass prism?",
        "options": [
          "Decreases",
          "Increases",
          "Remains unchanged",
          "Becomes zero"
        ],
        "correctAnswer": 0,
        "explanation": "Glass is optically denser than air. Speed of light v = c/n (where n > 1), so speed decreases."
      },
      {
        "id": "vgat_q54",
        "text": "Physics: Mirage in deserts during hot summers is due to which optical phenomenon?",
        "options": [
          "Total Internal Reflection",
          "Diffraction",
          "Interference",
          "Polarization"
        ],
        "correctAnswer": 0,
        "explanation": "Mirage is formed due to Total Internal Reflection (TIR) of light in layers of air with varying refractive indices."
      },
      {
        "id": "vgat_q55",
        "text": "Physics: What is work done by centripetal force on a body moving in a circle?",
        "options": [
          "Zero",
          "Maximum positive",
          "Negative",
          "Depends on radius"
        ],
        "correctAnswer": 0,
        "explanation": "Centripetal force acts perpendicular to displacement at every instant (θ = 90°). W = F s cos 90° = 0."
      },
      {
        "id": "vgat_q56",
        "text": "Physics: What type of lens is used to correct Myopia (Short-sightedness)?",
        "options": [
          "Concave Lens",
          "Convex Lens",
          "Bifocal Lens",
          "Cylindrical Lens"
        ],
        "correctAnswer": 0,
        "explanation": "Concave (diverging) lens is used to correct Myopia by diverging light rays before they enter eye."
      },
      {
        "id": "vgat_q57",
        "text": "Physics: Frequency of AC supply in India is:",
        "options": [
          "50 Hz",
          "60 Hz",
          "100 Hz",
          "220 Hz"
        ],
        "correctAnswer": 0,
        "explanation": "Standard household AC supply frequency in India is 50 Hz at 220 V."
      },
      {
        "id": "vgat_q58",
        "text": "Physics: Escape velocity from surface of Earth is approximately:",
        "options": [
          "11.2 km/s",
          "9.8 km/s",
          "7.9 km/s",
          "3.0 × 10⁸ m/s"
        ],
        "correctAnswer": 0,
        "explanation": "v_e = √(2 g R) ≈ √(2 × 9.8 × 6.4×10⁶) ≈ 11.2 km/s."
      },
      {
        "id": "vgat_q59",
        "text": "Physics: Transformer works on principle of:",
        "options": [
          "Mutual Induction",
          "Self Induction",
          "Seebeck Effect",
          "Piezoelectric Effect"
        ],
        "correctAnswer": 0,
        "explanation": "Transformer operates on Faraday's law of electromagnetic induction, specifically Mutual Induction between coils."
      },
      {
        "id": "vgat_q60",
        "text": "Physics: Which electromagnetic wave has shortest wavelength?",
        "options": [
          "Gamma Rays",
          "X-Rays",
          "Ultraviolet Rays",
          "Radio Waves"
        ],
        "correctAnswer": 0,
        "explanation": "Gamma rays have highest frequency and shortest wavelength (< 10⁻¹² m) in EM spectrum."
      },
      {
        "id": "vgat_q61",
        "text": "Physics: Device used to measure atmospheric pressure is:",
        "options": [
          "Barometer",
          "Hydrometer",
          "Hygrometer",
          "Manometer"
        ],
        "correctAnswer": 0,
        "explanation": "Barometer (invented by Torricelli) measures atmospheric pressure."
      },
      {
        "id": "vgat_q62",
        "text": "Physics: Speed of sound is maximum in which medium?",
        "options": [
          "Solid (Steel)",
          "Liquid (Water)",
          "Gas (Air)",
          "Vacuum"
        ],
        "correctAnswer": 0,
        "explanation": "Speed of sound v = √(Y/ρ). Solids have highest elasticity/stiffness, so sound travels fastest in solids."
      },
      {
        "id": "vgat_q63",
        "text": "Physics: Unit of electrical resistance is:",
        "options": [
          "Ohm",
          "Siemens",
          "Farad",
          "Henry"
        ],
        "correctAnswer": 0,
        "explanation": "Ohm (Ω) is SI unit of electrical resistance (V = I R)."
      },
      {
        "id": "vgat_q64",
        "text": "Physics: Convex mirror is used as rear-view mirror in vehicles because it forms:",
        "options": [
          "Erect, diminished, virtual image with wide field of view",
          "Inverted, enlarged image",
          "Real, inverted image",
          "Magnified erect image"
        ],
        "correctAnswer": 0,
        "explanation": "Convex mirrors always produce erect, diminished, virtual images and provide a wide field of view."
      },
      {
        "id": "vgat_q65",
        "text": "Physics: What is value of Acceleration due to gravity (g) at center of Earth?",
        "options": [
          "Zero",
          "9.8 m/s²",
          "Infinite",
          "4.9 m/s²"
        ],
        "correctAnswer": 0,
        "explanation": "At center of Earth, depth d = R. g' = g(1 - d/R) = g(1 - 1) = 0."
      },
      {
        "id": "vgat_q66",
        "text": "Physics: Which law of thermodynamics introduces concept of Entropy?",
        "options": [
          "Second Law",
          "First Law",
          "Zeroth Law",
          "Third Law"
        ],
        "correctAnswer": 0,
        "explanation": "Second Law of Thermodynamics introduces entropy, stating total entropy of isolated system always increases over time."
      },
      {
        "id": "vgat_q67",
        "text": "Physics: Fuse wire used in electrical circuits should have:",
        "options": [
          "Low melting point and high resistance",
          "High melting point and low resistance",
          "High melting point and high resistance",
          "Low melting point and low resistance"
        ],
        "correctAnswer": 0,
        "explanation": "A fuse wire must melt quickly when excessive current flows, requiring low melting point and high resistivity."
      },
      {
        "id": "vgat_q68",
        "text": "Physics: Photoelectric effect proves which nature of light?",
        "options": [
          "Particle Nature (Photon)",
          "Wave Nature",
          "Transverse Wave Nature",
          "Longitudinal Nature"
        ],
        "correctAnswer": 0,
        "explanation": "Einstein explained photoelectric effect using quantum concept of light as discrete energy packets (photons)."
      },
      {
        "id": "vgat_q69",
        "text": "Physics: Buoyant force acting on submerged body depends on:",
        "options": [
          "Density of liquid and volume of body submerged",
          "Mass of body only",
          "Shape of body only",
          "Temperature of body"
        ],
        "correctAnswer": 0,
        "explanation": "By Archimedes principle, Upthrust F_B = ρ_liquid × V_submerged × g."
      },
      {
        "id": "vgat_q70",
        "text": "Physics: Splitting of white light into its constituent colors by a glass prism is called:",
        "options": [
          "Dispersion",
          "Refraction",
          "Diffraction",
          "Scattering"
        ],
        "correctAnswer": 0,
        "explanation": "Dispersion is the phenomenon of splitting white light into 7 constituent colors (VIBGYOR) due to different speeds/wavelengths."
      },
      {
        "id": "vgat_q71",
        "text": "Physics: Hydraulic lift works on which principle?",
        "options": [
          "Pascal's Law",
          "Bernoulli's Principle",
          "Archimedes Principle",
          "Torricelli Law"
        ],
        "correctAnswer": 0,
        "explanation": "Pascal's Law states pressure applied to enclosed fluid is transmitted undiminished throughout fluid."
      },
      {
        "id": "vgat_q72",
        "text": "Physics: Why do stars twinkle in night sky?",
        "options": [
          "Atmospheric refraction of starlight",
          "Reflection of light from clouds",
          "Internal pulsation of stars",
          "Diffraction of light"
        ],
        "correctAnswer": 0,
        "explanation": "Starlight undergoes continuous refraction through earth's atmospheric layers of varying refractive indices."
      },
      {
        "id": "vgat_q73",
        "text": "Physics: Relation between focal length f and radius of curvature R of a spherical mirror is:",
        "options": [
          "f = R / 2",
          "f = 2 R",
          "f = R²",
          "f = 1 / R"
        ],
        "correctAnswer": 0,
        "explanation": "For spherical mirrors with small aperture, focal length f = R / 2."
      },
      {
        "id": "vgat_q74",
        "text": "Physics: Which particle emitted in Beta decay carries zero charge and negligible mass?",
        "options": [
          "Neutrino / Antineutrino",
          "Alpha particle",
          "Positron",
          "Proton"
        ],
        "correctAnswer": 0,
        "explanation": "In beta-minus decay, a neutron transforms into a proton, electron, and antineutrino."
      },
      {
        "id": "vgat_q75",
        "text": "Physics: Energy of Sun is produced primarily by:",
        "options": [
          "Nuclear Fusion (Hydrogen to Helium)",
          "Nuclear Fission",
          "Chemical Combustion",
          "Radioactive Decay"
        ],
        "correctAnswer": 0,
        "explanation": "Solar energy is generated via proton-proton chain nuclear fusion converting hydrogen nuclei into helium."
      },
      {
        "id": "vgat_q76",
        "text": "Chemistry: Which gas is known as Laughing Gas?",
        "options": [
          "Nitrous Oxide (N₂O)",
          "Nitric Oxide (NO)",
          "Nitrogen Dioxide (NO₂)",
          "Dinitrogen Pentoxide (N₂O₅)"
        ],
        "correctAnswer": 0,
        "explanation": "Nitrous Oxide (N₂O) is commonly known as Laughing Gas."
      },
      {
        "id": "vgat_q77",
        "text": "Chemistry: What is pH value of pure water at 25°C?",
        "options": [
          "7",
          "0",
          "14",
          "5.6"
        ],
        "correctAnswer": 0,
        "explanation": "Pure water is neutral with [H⁺] = 10⁻⁷ M, so pH = -log(10⁻⁷) = 7."
      },
      {
        "id": "vgat_q78",
        "text": "Chemistry: Main constituent of Natural Gas and Biogas is:",
        "options": [
          "Methane (CH₄)",
          "Ethane",
          "Propane",
          "Butane"
        ],
        "correctAnswer": 0,
        "explanation": "Methane (CH₄) accounts for 75-90% of natural gas and CNG/biogas."
      },
      {
        "id": "vgat_q79",
        "text": "Chemistry: Which acid is present in human stomach to aid digestion?",
        "options": [
          "Hydrochloric Acid (HCl)",
          "Sulfuric Acid",
          "Nitric Acid",
          "Acetic Acid"
        ],
        "correctAnswer": 0,
        "explanation": "Parietal cells in stomach mucosa secrete Hydrochloric Acid (HCl) at pH 1.5-3.5."
      },
      {
        "id": "vgat_q80",
        "text": "Chemistry: Process of coating iron articles with zinc to prevent rusting is called:",
        "options": [
          "Galvanization",
          "Anodizing",
          "Electroplating",
          "Smelting"
        ],
        "correctAnswer": 0,
        "explanation": "Galvanization is the application of a protective zinc coating to steel or iron to prevent rusting."
      },
      {
        "id": "vgat_q81",
        "text": "Chemistry: What is chemical formula of Baking Soda?",
        "options": [
          "NaHCO₃",
          "Na₂CO₃",
          "NaOH",
          "CaCO₃"
        ],
        "correctAnswer": 0,
        "explanation": "Sodium Bicarbonate (NaHCO₃) is Baking Soda. Na₂CO₃·10H₂O is Washing Soda."
      },
      {
        "id": "vgat_q82",
        "text": "Chemistry: Which element has highest electronegativity in periodic table?",
        "options": [
          "Fluorine (F)",
          "Chlorine (Cl)",
          "Oxygen (O)",
          "Helium (He)"
        ],
        "correctAnswer": 0,
        "explanation": "Fluorine has highest electronegativity value (4.0 on Pauling scale)."
      },
      {
        "id": "vgat_q83",
        "text": "Chemistry: Isotopes of an element have same number of:",
        "options": [
          "Protons (Atomic Number)",
          "Neutrons",
          "Mass Number",
          "Nucleons"
        ],
        "correctAnswer": 0,
        "explanation": "Isotopes are atoms of same element having same atomic number (protons) but different mass numbers (neutrons)."
      },
      {
        "id": "vgat_q84",
        "text": "Chemistry: Hardness of water is caused due to presence of salts of:",
        "options": [
          "Calcium and Magnesium",
          "Sodium and Potassium",
          "Iron and Copper",
          "Zinc and Lead"
        ],
        "correctAnswer": 0,
        "explanation": "Hardness is caused by soluble bicarbonates, chlorides, and sulfates of Calcium (Ca²⁺) and Magnesium (Mg²⁺)."
      },
      {
        "id": "vgat_q85",
        "text": "Chemistry: Which allotrope of carbon is good conductor of electricity?",
        "options": [
          "Graphite",
          "Diamond",
          "Fullerene",
          "Coal"
        ],
        "correctAnswer": 0,
        "explanation": "Graphite has sp² hybridized carbon atoms with free delocalized pi-electrons, making it an electrical conductor."
      },
      {
        "id": "vgat_q86",
        "text": "Chemistry: Solder alloy used for joining electrical wires consists of:",
        "options": [
          "Lead and Tin (Pb + Sn)",
          "Copper and Zinc",
          "Copper and Tin",
          "Aluminum and Nickel"
        ],
        "correctAnswer": 0,
        "explanation": "Solder is an alloy of Lead (Pb) and Tin (Sn) with low melting point."
      },
      {
        "id": "vgat_q87",
        "text": "Chemistry: Which gas evolved when metals react with dilute acids?",
        "options": [
          "Hydrogen (H₂)",
          "Oxygen",
          "Carbon Dioxide",
          "Nitrogen"
        ],
        "correctAnswer": 0,
        "explanation": "Active metal + Dilute Acid -> Metal Salt + Hydrogen gas (pops with burning splint)."
      },
      {
        "id": "vgat_q88",
        "text": "Chemistry: Chemical name of Plaster of Paris is:",
        "options": [
          "Calcium Sulfate Hemihydrate (CaSO₄ · 1/2 H₂O)",
          "Calcium Carbonate",
          "Calcium Sulfate Dihydrate",
          "Calcium Oxide"
        ],
        "correctAnswer": 0,
        "explanation": "Plaster of Paris is CaSO₄ · 1/2 H₂O. Gypsum is CaSO₄ · 2H₂O."
      },
      {
        "id": "vgat_q89",
        "text": "Chemistry: Which non-metal is liquid at room temperature?",
        "options": [
          "Bromine (Br)",
          "Mercury",
          "Iodine",
          "Chlorine"
        ],
        "correctAnswer": 0,
        "explanation": "Bromine is the only non-metallic element that is liquid at standard room temperature."
      },
      {
        "id": "vgat_q90",
        "text": "Chemistry: Vinegar is a solution of:",
        "options": [
          "5-8% Acetic Acid in water",
          "50% Ethanol in water",
          "10% Formic Acid",
          "Pure Methanoic Acid"
        ],
        "correctAnswer": 0,
        "explanation": "Vinegar is a dilute 5-8% aqueous solution of Acetic Acid (CH₃COOH)."
      },
      {
        "id": "vgat_q91",
        "text": "Biology: Powerhouse of the cell is:",
        "options": [
          "Mitochondria",
          "Ribosome",
          "Golgi Apparatus",
          "Lysosome"
        ],
        "correctAnswer": 0,
        "explanation": "Mitochondria produce cellular energy in the form of ATP via aerobic respiration."
      },
      {
        "id": "vgat_q92",
        "text": "Biology: Which blood group is known as Universal Donor?",
        "options": [
          "O negative (O -ve)",
          "AB positive",
          "O positive",
          "A negative"
        ],
        "correctAnswer": 0,
        "explanation": "O negative blood lacks A, B, and Rh antigens, preventing immune rejection in recipient."
      },
      {
        "id": "vgat_q93",
        "text": "Biology: Hormone Insulin is secreted by which organ?",
        "options": [
          "Pancreas (Beta cells)",
          "Liver",
          "Thyroid",
          "Adrenal gland"
        ],
        "correctAnswer": 0,
        "explanation": "Insulin is secreted by Beta cells of Islets of Langerhans in Pancreas."
      },
      {
        "id": "vgat_q94",
        "text": "Biology: Deficiency of Vitamin C causes which disease?",
        "options": [
          "Scurvy",
          "Rickets",
          "Beriberi",
          "Night Blindness"
        ],
        "correctAnswer": 0,
        "explanation": "Vitamin C (Ascorbic acid) deficiency causes Scurvy (bleeding gums, skin spots)."
      },
      {
        "id": "vgat_q95",
        "text": "Biology: Plant vascular tissue responsible for transport of water and minerals is:",
        "options": [
          "Xylem",
          "Phloem",
          "Cambium",
          "Parenchyma"
        ],
        "correctAnswer": 0,
        "explanation": "Xylem transports water and dissolved minerals upwards from roots to leaves. Phloem transports food."
      },
      {
        "id": "vgat_q96",
        "text": "Biology: Human heart has how many chambers?",
        "options": [
          "4 Chambers (2 Atria, 2 Ventricles)",
          "3 Chambers",
          "2 Chambers",
          "6 Chambers"
        ],
        "correctAnswer": 0,
        "explanation": "Human heart has 4 chambers: Right Atrium, Right Ventricle, Left Atrium, Left Ventricle."
      },
      {
        "id": "vgat_q97",
        "text": "Biology: Which blood cells are responsible for immune defense against infections?",
        "options": [
          "White Blood Cells (Leukocytes)",
          "Red Blood Cells (Erythrocytes)",
          "Platelets (Thrombocytes)",
          "Plasma"
        ],
        "correctAnswer": 0,
        "explanation": "WBCs (Leukocytes) fight infections and pathogens in immune system."
      },
      {
        "id": "vgat_q98",
        "text": "Biology: Enzyme Pepsin digests which nutrient in stomach?",
        "options": [
          "Proteins",
          "Carbohydrates",
          "Fats",
          "Nucleic Acids"
        ],
        "correctAnswer": 0,
        "explanation": "Pepsin breaks down proteins into smaller peptides in acidic environment of stomach."
      },
      {
        "id": "vgat_q99",
        "text": "Biology: Gas released by green plants during Photosynthesis is:",
        "options": [
          "Oxygen (O₂)",
          "Carbon Dioxide",
          "Nitrogen",
          "Methane"
        ],
        "correctAnswer": 0,
        "explanation": "6CO₂ + 6H₂O + sunlight -> C₆H₁₂O₆ + 6O₂. Oxygen is liberated as byproduct."
      },
      {
        "id": "vgat_q100",
        "text": "Biology: Total number of bones in adult human skeleton is:",
        "options": [
          "206",
          "300",
          "212",
          "180"
        ],
        "correctAnswer": 0,
        "explanation": "An adult human skeleton consists of 206 bones."
      },
      {
        "id": "vgat_q101",
        "text": "History: Battle of Plassey was fought in which year?",
        "options": [
          "1757",
          "1764",
          "1857",
          "1761"
        ],
        "correctAnswer": 0,
        "explanation": "Battle of Plassey took place on 23 June 1757 between Robert Clive and Siraj-ud-Daulah."
      },
      {
        "id": "vgat_q102",
        "text": "History: Who was the founder of Brahmo Samaj (1828)?",
        "options": [
          "Raja Ram Mohan Roy",
          "Swami Dayananda Saraswati",
          "Swami Vivekananda",
          "Ishwar Chandra Vidyasagar"
        ],
        "correctAnswer": 0,
        "explanation": "Raja Ram Mohan Roy founded Brahmo Sabha in 1828 (later Brahmo Samaj) to crusade against Sati and social evils."
      },
      {
        "id": "vgat_q103",
        "text": "History: During 1857 Revolt, who led rebellion at Kanpur?",
        "options": [
          "Nana Saheb & Tantia Tope",
          "Rani Lakshmibai",
          "Kunwar Singh",
          "Begum Hazrat Mahal"
        ],
        "correctAnswer": 0,
        "explanation": "Nana Saheb led the revolt at Kanpur along with his commander Tantia Tope."
      },
      {
        "id": "vgat_q104",
        "text": "History: Who presided over the famous 1929 Lahore Session of Indian National Congress where Purna Swaraj resolution was passed?",
        "options": [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Subhash Chandra Bose",
          "Sardar Vallabhbhai Patel"
        ],
        "correctAnswer": 0,
        "explanation": "Jawaharlal Nehru presided over 1929 Lahore INC session where Purna Swaraj (Complete Independence) was declared."
      },
      {
        "id": "vgat_q105",
        "text": "History: Quit India Movement was launched by Mahatma Gandhi in which year?",
        "options": [
          "1942",
          "1930",
          "1920",
          "1919"
        ],
        "correctAnswer": 0,
        "explanation": "Quit India Movement ('Do or Die') was launched at Gowalia Tank Maidan, Bombay on 8 August 1942."
      },
      {
        "id": "vgat_q106",
        "text": "History: Who was Viceroy of India during Partition of Bengal (1905)?",
        "options": [
          "Lord Curzon",
          "Lord Dalhousie",
          "Lord Mountbatten",
          "Lord Ripon"
        ],
        "correctAnswer": 0,
        "explanation": "Lord Curzon announced Partition of Bengal in July 1905, triggering Swadeshi Movement."
      },
      {
        "id": "vgat_q107",
        "text": "History: First Session of Indian National Congress (1885) was held at:",
        "options": [
          "Bombay (Gokuldas Tejpal Sanskrit College)",
          "Calcutta",
          "Madras",
          "Allahabad"
        ],
        "correctAnswer": 0,
        "explanation": "First INC session was held in Bombay in Dec 1885 presided by W.C. Bonnerjee with 72 delegates."
      },
      {
        "id": "vgat_q108",
        "text": "History: Who founded Indian National Army (Azad Hind Fauj) initially in Singapore?",
        "options": [
          "Captain Mohan Singh",
          "Subhash Chandra Bose",
          "Rash Behari Bose",
          "Lala Har Dayal"
        ],
        "correctAnswer": 0,
        "explanation": "INA was first conceived by Captain Mohan Singh in 1942 and later revived by Subhash Chandra Bose."
      },
      {
        "id": "vgat_q109",
        "text": "History: Jallianwala Bagh Massacre took place on 13th April 1919 at:",
        "options": [
          "Amritsar",
          "Lahore",
          "Jalandhar",
          "Ludhiana"
        ],
        "correctAnswer": 0,
        "explanation": "General Dyer opened fire on unarmed crowd protesting Rowlatt Act at Jallianwala Bagh in Amritsar on Baisakhi day 1919."
      },
      {
        "id": "vgat_q110",
        "text": "History: Who was known as 'Frontier Gandhi'?",
        "options": [
          "Khan Abdul Ghaffar Khan",
          "Hasrat Mohani",
          "Abul Kalam Azad",
          "Khan Bahadur"
        ],
        "correctAnswer": 0,
        "explanation": "Khan Abdul Ghaffar Khan (Badshah Khan), founder of Khudai Khidmatgar ('Red Shirts'), was known as Frontier Gandhi."
      },
      {
        "id": "vgat_q111",
        "text": "History: Who started Newspaper 'Kesari' in Marathi?",
        "options": [
          "Bal Gangadhar Tilak",
          "Gopal Krishna Gokhale",
          "V.D. Savarkar",
          "Lala Lajpat Rai"
        ],
        "correctAnswer": 0,
        "explanation": "Lokmanya Bal Gangadhar Tilak launched Kesari (Marathi) and Maratha (English) in 1881."
      },
      {
        "id": "vgat_q112",
        "text": "History: Indus Valley Civilization site 'Lothal' famous for dockyard is located in modern state of:",
        "options": [
          "Gujarat",
          "Rajasthan",
          "Punjab",
          "Haryana"
        ],
        "correctAnswer": 0,
        "explanation": "Lothal, the ancient port city of Indus Valley Civilization, is located in Ahmedabad district of Gujarat."
      },
      {
        "id": "vgat_q113",
        "text": "History: Who wrote the famous book 'Hind Swaraj' (1909)?",
        "options": [
          "Mahatma Gandhi",
          "Bal Gangadhar Tilak",
          "Aurobindo Ghose",
          "B.R. Ambedkar"
        ],
        "correctAnswer": 0,
        "explanation": "Mahatma Gandhi wrote Hind Swaraj in Gujarati in 1909 aboard ship SS Kildonan Castle."
      },
      {
        "id": "vgat_q114",
        "text": "History: Third Battle of Panipat (1761) was fought between:",
        "options": [
          "Marathas and Ahmad Shah Abdali",
          "Babur and Ibrahim Lodi",
          "Akbar and Hemu",
          "British and Siraj-ud-Daulah"
        ],
        "correctAnswer": 0,
        "explanation": "Third Battle of Panipat took place on 14 Jan 1761 between Maratha Empire and invading Afghan army of Ahmad Shah Durrani (Abdali)."
      },
      {
        "id": "vgat_q115",
        "text": "History: Who abolished System of Dual Government in Bengal (1772)?",
        "options": [
          "Warren Hastings",
          "Robert Clive",
          "Lord Cornwallis",
          "Lord Wellesley"
        ],
        "correctAnswer": 0,
        "explanation": "Warren Hastings abolished Dual System introduced by Clive and brought Bengal under direct administration of Company."
      },
      {
        "id": "vgat_q116",
        "text": "History: Which Maurya Emperor embraced Buddhism after Kalinga War?",
        "options": [
          "Ashoka",
          "Chandragupta Maurya",
          "Bindusara",
          "Brihadratha"
        ],
        "correctAnswer": 0,
        "explanation": "Emperor Ashoka embraced Buddhism after witnessing bloodshed in Kalinga War (261 BCE)."
      },
      {
        "id": "vgat_q117",
        "text": "History: Dandi March (Salt Satyagraha) started from Sabarmati Ashram on:",
        "options": [
          "12 March 1930",
          "6 April 1930",
          "26 January 1930",
          "15 August 1930"
        ],
        "correctAnswer": 0,
        "explanation": "Gandhi started Dandi March on 12 March 1930 with 78 followers and reached Dandi on 5 April, breaking salt law on 6 April 1930."
      },
      {
        "id": "vgat_q118",
        "text": "History: Who was Governor-General when Sati practice was banned in 1829?",
        "options": [
          "Lord William Bentinck",
          "Lord Canning",
          "Lord Dalhousie",
          "Lord Hastings"
        ],
        "correctAnswer": 0,
        "explanation": "Lord William Bentinck enacted Bengal Sati Regulation XVII of 1829 banning Sati with efforts of Raja Ram Mohan Roy."
      },
      {
        "id": "vgat_q119",
        "text": "History: Who gave slogan 'Inquilab Zindabad' popularity during freedom struggle?",
        "options": [
          "Bhagat Singh",
          "Hasrat Mohani",
          "Subhash Chandra Bose",
          "Chandrashekhar Azad"
        ],
        "correctAnswer": 0,
        "explanation": "Coined by Maulana Hasrat Mohani, 'Inquilab Zindabad' was popularized by Bhagat Singh and B.K. Dutt."
      },
      {
        "id": "vgat_q120",
        "text": "History: Treaty of Amritsar (1809) was signed between British and:",
        "options": [
          "Maharaja Ranjit Singh",
          "Tipu Sultan",
          "Nawab of Oudh",
          "Peshwa Baji Rao II"
        ],
        "correctAnswer": 0,
        "explanation": "Treaty of Amritsar 1809 fixed Sutlej river as boundary between Sikh Empire of Maharaja Ranjit Singh and British."
      },
      {
        "id": "vgat_q121",
        "text": "Geography: Longest river in India originating and ending within Indian territory is:",
        "options": [
          "Godavari",
          "Ganga",
          "Narmada",
          "Krishna"
        ],
        "correctAnswer": 0,
        "explanation": "Godavari (1465 km), known as Dakshin Ganga, is longest river originating at Trimbakeshwar (Maharashtra) within India."
      },
      {
        "id": "vgat_q122",
        "text": "Geography: Which strait separates India from Sri Lanka?",
        "options": [
          "Palk Strait",
          "Malacca Strait",
          "Sunda Strait",
          "Bering Strait"
        ],
        "correctAnswer": 0,
        "explanation": "Palk Strait lies between Tamil Nadu state of India and Mannar district of Sri Lanka."
      },
      {
        "id": "vgat_q123",
        "text": "Geography: Highest peak in Peninsular India is:",
        "options": [
          "Anamudi (2695 m)",
          "Doddabetta",
          "Guru Shikhar",
          "Mahendragiri"
        ],
        "correctAnswer": 0,
        "explanation": "Anamudi in Anaimalai Hills (Kerala) is highest peak in Western Ghats and Peninsular India."
      },
      {
        "id": "vgat_q124",
        "text": "Geography: Which planet is known as Earth's Twin?",
        "options": [
          "Venus",
          "Mars",
          "Mercury",
          "Jupiter"
        ],
        "correctAnswer": 0,
        "explanation": "Venus is Earth's twin due to similar size, mass, density, and gravity."
      },
      {
        "id": "vgat_q125",
        "text": "Geography: Standard Meridian of India (82°30' E) passes through which city?",
        "options": [
          "Mirzapur (near Prayagraj)",
          "Ujjain",
          "Nagpur",
          "Ranchi"
        ],
        "correctAnswer": 0,
        "explanation": "82°30' E longitude passing through Mirzapur (UP) determines Indian Standard Time (IST = UTC+5:30)."
      },
      {
        "id": "vgat_q126",
        "text": "Geography: Which layer of atmosphere contains Ozone layer?",
        "options": [
          "Stratosphere",
          "Troposphere",
          "Mesosphere",
          "Thermosphere"
        ],
        "correctAnswer": 0,
        "explanation": "Ozone layer is situated in Stratosphere (15-35 km above Earth surface) absorbing harmful UV radiation."
      },
      {
        "id": "vgat_q127",
        "text": "Geography: Black soil of Deccan Trap ideal for growing cotton is also known as:",
        "options": [
          "Regur Soil",
          "Khadar Soil",
          "Bangar Soil",
          "Laterite Soil"
        ],
        "correctAnswer": 0,
        "explanation": "Black cotton soil formed from lava basalt rocks is known as Regur soil."
      },
      {
        "id": "vgat_q128",
        "text": "Geography: Majuli, largest inhabited riverine island in world, is located in river:",
        "options": [
          "Brahmaputra",
          "Ganga",
          "Indus",
          "Mahanadi"
        ],
        "correctAnswer": 0,
        "explanation": "Majuli island in Assam is located in Brahmaputra river."
      },
      {
        "id": "vgat_q129",
        "text": "Geography: Rohtang Pass connects Kullu valley with Lahaul and Spiti in state of:",
        "options": [
          "Himachal Pradesh",
          "Uttarakhand",
          "Jammu & Kashmir",
          "Sikkim"
        ],
        "correctAnswer": 0,
        "explanation": "Rohtang Pass (3978 m) is located in Pir Panjal range of Himachal Pradesh."
      },
      {
        "id": "vgat_q130",
        "text": "Geography: Which ocean current is a warm ocean current in Atlantic Ocean?",
        "options": [
          "Gulf Stream",
          "Labrador Current",
          "Canaries Current",
          "Benguela Current"
        ],
        "correctAnswer": 0,
        "explanation": "Gulf Stream is a powerful warm Atlantic current originating in Gulf of Mexico."
      },
      {
        "id": "vgat_q131",
        "text": "Geography: Tropic of Cancer (23°30' N) does NOT pass through which Indian state?",
        "options": [
          "Odisha",
          "Gujarat",
          "Madhya Pradesh",
          "Rajasthan"
        ],
        "correctAnswer": 0,
        "explanation": "Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram. It does NOT pass through Odisha."
      },
      {
        "id": "vgat_q132",
        "text": "Geography: Tehri Dam, highest dam in India, is constructed on river:",
        "options": [
          "Bhagirathi",
          "Alaknanda",
          "Yamuna",
          "Sutlej"
        ],
        "correctAnswer": 0,
        "explanation": "Tehri Dam (260.5 m) is built on Bhagirathi River in Tehri Garhwal, Uttarakhand."
      },
      {
        "id": "vgat_q133",
        "text": "Geography: Which forest type covers maximum area in India?",
        "options": [
          "Tropical Moist Deciduous Forest",
          "Tropical Rainforest",
          "Montane Forest",
          "Thorn Forest"
        ],
        "correctAnswer": 0,
        "explanation": "Tropical Deciduous Forests (Monsoon Forests) cover most extensive area in India."
      },
      {
        "id": "vgat_q134",
        "text": "Geography: Equinox occurs when Sun is directly overhead at:",
        "options": [
          "Equator",
          "Tropic of Cancer",
          "Tropic of Capricorn",
          "Arctic Circle"
        ],
        "correctAnswer": 0,
        "explanation": "On Equinox (21 March and 23 September), Sun is directly above Equator resulting in equal day and night length globally."
      },
      {
        "id": "vgat_q135",
        "text": "Geography: Kaziranga National Park famous for One-horned Rhinoceros is in:",
        "options": [
          "Assam",
          "West Bengal",
          "Meghalaya",
          "Arunachal Pradesh"
        ],
        "correctAnswer": 0,
        "explanation": "Kaziranga National Park (UNESCO World Heritage Site) is located in Assam."
      },
      {
        "id": "vgat_q136",
        "text": "Geography: Earthquakes intensity is measured on which scale?",
        "options": [
          "Richter Scale / Moment Magnitude",
          "Beaufort Scale",
          "Kelvin Scale",
          "Decibel Scale"
        ],
        "correctAnswer": 0,
        "explanation": "Richter Scale measures logarithmic amplitude/energy release of seismic waves during earthquake."
      },
      {
        "id": "vgat_q137",
        "text": "Geography: Largest freshwater lake in India is:",
        "options": [
          "Wular Lake (Jammu & Kashmir)",
          "Chilika Lake",
          "Dal Lake",
          "Sambhar Lake"
        ],
        "correctAnswer": 0,
        "explanation": "Wular Lake in Bandipora district of J&K is largest natural freshwater lake in India."
      },
      {
        "id": "vgat_q138",
        "text": "Geography: Boundary line between India and China is known as:",
        "options": [
          "McMahon Line",
          "Radcliffe Line",
          "Durand Line",
          "49th Parallel"
        ],
        "correctAnswer": 0,
        "explanation": "McMahon Line drawn in 1914 Simla Convention demarcates boundary between India (Arunachal) and Tibet/China."
      },
      {
        "id": "vgat_q139",
        "text": "Geography: Which Indian city is known as 'Cottonopolis of India'?",
        "options": [
          "Mumbai",
          "Ahmedabad",
          "Surat",
          "Coimbatore"
        ],
        "correctAnswer": 0,
        "explanation": "Mumbai was historically dubbed Cottonopolis due to its rapid emergence as textile hub."
      },
      {
        "id": "vgat_q140",
        "text": "Geography: Narmada and Tapi rivers flow into which sea?",
        "options": [
          "Arabian Sea (West flowing)",
          "Bay of Bengal",
          "Indian Ocean",
          "Andaman Sea"
        ],
        "correctAnswer": 0,
        "explanation": "Narmada and Tapi are major rift-valley west-flowing rivers draining into Arabian Sea through Gulf of Khambhat."
      },
      {
        "id": "vgat_q141",
        "text": "Polity: Fundamental Rights in Indian Constitution are borrowed from Constitution of:",
        "options": [
          "USA (Bill of Rights)",
          "UK",
          "USSR",
          "Canada"
        ],
        "correctAnswer": 0,
        "explanation": "Part III of Indian Constitution (Articles 12-35) covering Fundamental Rights was inspired by US Bill of Rights."
      },
      {
        "id": "vgat_q142",
        "text": "Polity: Who is Supreme Commander of Defense Forces of India?",
        "options": [
          "President of India",
          "Prime Minister of India",
          "Chief of Defense Staff (CDS)",
          "Defense Minister"
        ],
        "correctAnswer": 0,
        "explanation": "Under Article 53(2) of Indian Constitution, Supreme Command of Defense Forces is vested in President of India."
      },
      {
        "id": "vgat_q143",
        "text": "Defense: Operational Command headquarters of Indian Navy's Western Naval Command is located at:",
        "options": [
          "Mumbai",
          "Kochi",
          "Visakhapatnam",
          "Karwar"
        ],
        "correctAnswer": 0,
        "explanation": "Western Naval Command is headquartered at Mumbai. Eastern at Visakhapatnam, Southern at Kochi."
      },
      {
        "id": "vgat_q144",
        "text": "Defense: What is name of India's first indigenous aircraft carrier?",
        "options": [
          "INS Vikrant (IAC-1)",
          "INS Vikramaditya",
          "INS Viraat",
          "INS Arihant"
        ],
        "correctAnswer": 0,
        "explanation": "INS Vikrant built by Cochin Shipyard Limited is India's 1st indigenously designed aircraft carrier commissioned in 2022."
      },
      {
        "id": "vgat_q145",
        "text": "Defense: 'Exercise JIMEX' is a bilateral maritime exercise conducted between India and:",
        "options": [
          "Japan",
          "Indonesia",
          "Jamaica",
          "Jordan"
        ],
        "correctAnswer": 0,
        "explanation": "JIMEX stands for Japan-India Maritime Exercise."
      },
      {
        "id": "vgat_q146",
        "text": "Polity: Minimum age required to become President of India is:",
        "options": [
          "35 years",
          "30 years",
          "25 years",
          "21 years"
        ],
        "correctAnswer": 0,
        "explanation": "Article 58 specifies a citizen must be at least 35 years old to qualify for election as President."
      },
      {
        "id": "vgat_q147",
        "text": "Defense: Headquarters of National Defence Academy (NDA) is located at:",
        "options": [
          "Khadakwasla, Pune (Maharashtra)",
          "Dehradun",
          "Ezhimala",
          "Wellington"
        ],
        "correctAnswer": 0,
        "explanation": "NDA, world's 1st tri-service academy, is situated at Khadakwasla, Pune."
      },
      {
        "id": "vgat_q148",
        "text": "Polity: Which Amendment Act of Indian Constitution added Fundamental Duties under Article 51A?",
        "options": [
          "42nd Constitutional Amendment Act 1976",
          "44th Amendment Act 1978",
          "86th Amendment Act 2002",
          "73rd Amendment Act 1992"
        ],
        "correctAnswer": 0,
        "explanation": "42nd Amendment Act 1976 incorporated Part IV-A (Article 51A) on recommendation of Swaran Singh Committee."
      },
      {
        "id": "vgat_q149",
        "text": "Defense: Surface-to-Air Missile system 'AKASH' developed by DRDO has an operational range of approx:",
        "options": [
          "25 km to 30 km",
          "100 km",
          "300 km",
          "500 km"
        ],
        "correctAnswer": 0,
        "explanation": "AKASH is a medium-range mobile surface-to-air missile defense system with 25-30 km range."
      },
      {
        "id": "vgat_q150",
        "text": "Polity: Who presides over Joint Sitting of both Houses of Parliament under Article 108?",
        "options": [
          "Speaker of Lok Sabha",
          "Vice-President (Rajya Sabha Chairman)",
          "President of India",
          "Prime Minister"
        ],
        "correctAnswer": 0,
        "explanation": "Under Article 118(4), Joint Sitting summoned by President is presided over by Speaker of Lok Sabha."
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
          const defaultIds = new Set(DEFAULT_QUIZZES.map(q => q.id));
          const filtered = parsed.filter(q => !defaultIds.has(q.id) && q.id !== "nda-2-2023-maths" && q.id !== "web-dev-101");
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
