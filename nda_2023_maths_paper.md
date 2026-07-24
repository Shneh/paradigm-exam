# UPSC NDA (II) 2023 - Mathematics Official Question Paper

**Exam Details:**
- **Total Questions:** 120
- **Time Allowed:** 150 Minutes (2.5 Hours)
- **Total Marks:** 300 Marks
- **Marking Scheme:** Correct: +2.5 | Incorrect: -0.8333 (1/3 of 2.5) | Unattempted: 0

---

### Q1. What is the locus of z such that |z - 1 - i| = |z + 1 + i| where z is a complex number?
- **(A)** A straight line passing through origin  ✓ *(Correct Answer)*
- **(B)** A circle centered at origin
- **(C)** An ellipse with foci (1,1) and (-1,-1)
- **(D)** A parabola

> **Explanation:** |z - (1+i)| = |z - (-1-i)| represents the perpendicular bisector of the line segment joining (1,1) and (-1,-1), which passes through the origin.

---

### Q2. What is the remainder when (1! + 2! + 3! + 4! + ... + 100!) is divided by 24?
- **(A)** 9  ✓ *(Correct Answer)*
- **(B)** 12
- **(C)** 15
- **(D)** 3

> **Explanation:** For n >= 4, n! is divisible by 24 (since 4! = 24). So remainder is (1! + 2! + 3!) mod 24 = (1 + 2 + 6) mod 24 = 9.

---

### Q3. If a, b, c are in Geometric Progression (GP) with common ratio r where 0 < r < 1, then a + b, 2b, b + c are in:
- **(A)** Arithmetic Progression (AP)
- **(B)** Geometric Progression (GP)
- **(C)** Harmonic Progression (HP)  ✓ *(Correct Answer)*
- **(D)** Neither AP nor GP nor HP

> **Explanation:** Since b = ar, c = ar^2, we have (a+b) = a(1+r), 2b = 2ar, (b+c) = ar(1+r). Taking reciprocals shows 1/(a+b) + 1/(b+c) = 2/(2b), so they are in HP.

---

### Q4. What is the number of real roots of the equation x^4 - 4x - 1 = 0?
- **(A)** 0
- **(B)** 1
- **(C)** 2  ✓ *(Correct Answer)*
- **(D)** 4

> **Explanation:** Let f(x) = x^4 - 4x - 1. f'(x) = 4x^3 - 4 = 0 => x = 1. f(1) = -4 < 0. As x -> inf, f(x) -> inf; as x -> -inf, f(x) -> inf. Thus f(x) crosses zero twice, yielding 2 real roots.

---

### Q5. If A = {x ∈ R : x^2 - 5x + 6 = 0} and B = {x ∈ R : x^2 - 7x + 12 = 0}, what is (A ∪ B) \ (A ∩ B)?
- **(A)** {2, 4}  ✓ *(Correct Answer)*
- **(B)** {2, 3, 4}
- **(C)** {2, 4, 3}
- **(D)** {2, 4}

> **Explanation:** A = {2, 3}, B = {3, 4}. A ∪ B = {2, 3, 4}, A ∩ B = {3}. Symmetric difference = {2, 4}.

---

### Q6. Consider a matrix A of order 3x3 such that det(A) = 5. What is det(2 * adj(A)) equal to?
- **(A)** 40
- **(B)** 100
- **(C)** 200  ✓ *(Correct Answer)*
- **(D)** 400

> **Explanation:** det(k * adj(A)) = k^n * det(adj(A)) = k^n * (det(A))^(n-1). Here n=3, k=2, det(A)=5. det(2*adj(A)) = 2^3 * 5^(3-1) = 8 * 25 = 200.

---

### Q7. If the roots of x^2 - bx + c = 0 are two consecutive integers, then what is b^2 - 4c equal to?
- **(A)** 0
- **(B)** 1  ✓ *(Correct Answer)*
- **(C)** 2
- **(D)** 4

> **Explanation:** Let roots be k and k+1. Difference of roots = 1. (alpha - beta)^2 = (alpha + beta)^2 - 4*alpha*beta = b^2 - 4c = 1^2 = 1.

---

### Q8. In how many ways can a committee of 5 members be formed from 6 men and 4 women such that at least 3 women are included?
- **(A)** 60
- **(B)** 66  ✓ *(Correct Answer)*
- **(C)** 72
- **(D)** 84

> **Explanation:** Case 1: 3 women and 2 men = 4C3 * 6C2 = 4 * 15 = 60. Case 2: 4 women and 1 man = 4C4 * 6C1 = 1 * 6 = 6. Total = 60 + 6 = 66.

---

### Q9. What is the expansion coefficient of x^7 in (1 - 2x + x^2)^5?
- **(A)** -120
- **(B)** -210  ✓ *(Correct Answer)*
- **(C)** 210
- **(D)** 120

> **Explanation:** (1 - 2x + x^2)^5 = ((1 - x)^2)^5 = (1 - x)^10. Coefficient of x^7 in (1 - x)^10 is 10C7 * (-1)^7 = -120.

---

### Q10. If log_10(2), log_10(2^x - 1), log_10(2^x + 3) are in Arithmetic Progression (AP), then what is the value of x?
- **(A)** log_2(5)  ✓ *(Correct Answer)*
- **(B)** log_2(3)
- **(C)** 1
- **(D)** 2

> **Explanation:** 2*log_10(2^x - 1) = log_10(2) + log_10(2^x + 3) => (2^x - 1)^2 = 2(2^x + 3). Let y = 2^x. (y-1)^2 = 2y + 6 => y^2 - 4y - 5 = 0 => (y-5)(y+1) = 0. Since y > 0, y = 5 => 2^x = 5 => x = log_2(5).

---

### Q11. What is the sum of all two-digit numbers which when divided by 4 yield 1 as remainder?
- **(A)** 1210  ✓ *(Correct Answer)*
- **(B)** 1215
- **(C)** 1225
- **(D)** 1250

> **Explanation:** First 2-digit number = 13, last = 97. AP: 13, 17, 21, ..., 97. n = (97 - 13)/4 + 1 = 22. Sum = (22/2) * (13 + 97) = 11 * 110 = 1210.

---

### Q12. If matrix A = [[0, 1], [-1, 0]], then what is A^4 equal to?
- **(A)** I (Identity Matrix)  ✓ *(Correct Answer)*
- **(B)** -I
- **(C)** A
- **(D)** -A

> **Explanation:** A^2 = [[-1, 0], [0, -1]] = -I. Hence A^4 = (-I)^2 = I.

---

### Q13. What is the value of det([[1, a, b+c], [1, b, c+a], [1, c, a+b]])?
- **(A)** a + b + c
- **(B)** 0  ✓ *(Correct Answer)*
- **(C)** 1
- **(D)** abc

> **Explanation:** Add C3 -> C3 + C2 gives 3rd column as (a+b+c, a+b+c, a+b+c) which is a multiple of 1st column (1, 1, 1). Two proportional columns make det = 0.

---

### Q14. If a, b are roots of x^2 - p(x + 1) - c = 0, then what is (1 + a)(1 + b) equal to?
- **(A)** 1 - c  ✓ *(Correct Answer)*
- **(B)** 1 + c
- **(C)** c - 1
- **(D)** p + c

> **Explanation:** x^2 - px - (p + c) = 0. a + b = p, ab = -(p + c). (1 + a)(1 + b) = 1 + (a + b) + ab = 1 + p - p - c = 1 - c.

---

### Q15. How many terms are there in the expansion of (x + y + z)^10?
- **(A)** 33
- **(B)** 66  ✓ *(Correct Answer)*
- **(C)** 55
- **(D)** 44

> **Explanation:** Number of terms in (x_1 + x_2 + ... + x_r)^n is (n + r - 1)C(r - 1). Here n=10, r=3. (10 + 3 - 1)C(3 - 1) = 12C2 = 66.

---

### Q16. If standard deviation of x_1, x_2, ..., x_n is σ, then what is the standard deviation of 2x_1 + 3, 2x_2 + 3, ..., 2x_n + 3?
- **(A)** σ
- **(B)** 2σ  ✓ *(Correct Answer)*
- **(C)** 2σ + 3
- **(D)** 4σ

> **Explanation:** Standard deviation is invariant under shift of origin (+3) and scales directly by multiplying factor (|2|). New SD = 2σ.

---

### Q17. If tan(A) = 1/2 and tan(B) = 1/3, what is the value of A + B?
- **(A)** π/6
- **(B)** π/4  ✓ *(Correct Answer)*
- **(C)** π/3
- **(D)** π/2

> **Explanation:** tan(A + B) = (tan A + tan B) / (1 - tan A tan B) = (1/2 + 1/3) / (1 - 1/6) = (5/6)/(5/6) = 1 => A + B = π/4.

---

### Q18. What is the maximum value of 3 sin(x) + 4 cos(x) + 5?
- **(A)** 5
- **(B)** 10  ✓ *(Correct Answer)*
- **(C)** 12
- **(D)** 7

> **Explanation:** Max value of a sin x + b cos x is sqrt(a^2 + b^2) = sqrt(3^2 + 4^2) = 5. Max of 5 + 5 = 10.

---

### Q19. What is sin(15°) equal to?
- **(A)** (√3 - 1) / (2√2)  ✓ *(Correct Answer)*
- **(B)** (√3 + 1) / (2√2)
- **(C)** (1 - √3) / (2√2)
- **(D)** 1 / (2√2)

> **Explanation:** sin(45° - 30°) = sin 45 cos 30 - cos 45 sin 30 = (1/√2)(√3/2) - (1/√2)(1/2) = (√3 - 1)/(2√2).

---

### Q20. What is the principal value of sin^-1(sin(2π/3))?
- **(A)** 2π/3
- **(B)** π/3  ✓ *(Correct Answer)*
- **(C)** -π/3
- **(D)** 4π/3

> **Explanation:** Range of sin^-1 is [-π/2, π/2]. sin(2π/3) = sin(π - π/3) = sin(π/3). Thus sin^-1(sin(π/3)) = π/3.

---

### Q21. What is lim_{x -> 0} (sin(x) / x)^(1/x^2) equal to?
- **(A)** e
- **(B)** 1/e
- **(C)** e^(-1/6)  ✓ *(Correct Answer)*
- **(D)** e^(1/6)

> **Explanation:** Form 1^inf. L = exp( lim_{x->0} (sin x / x - 1)/x^2 ) = exp( lim_{x->0} (sin x - x)/x^3 ). By Taylor series sin x = x - x^3/6 => L = e^(-1/6).

---

### Q22. What is lim_{x -> 0} (1 - cos(2x)) / x^2 equal to?
- **(A)** 1
- **(B)** 2  ✓ *(Correct Answer)*
- **(C)** 4
- **(D)** 1/2

> **Explanation:** 1 - cos(2x) = 2 sin^2(x). lim_{x->0} 2 (sin x / x)^2 = 2 * 1^2 = 2.

---

### Q23. If f(x) = |x - 1| + |x - 2|, at how many points in R is f(x) non-differentiable?
- **(A)** 0
- **(B)** 1
- **(C)** 2  ✓ *(Correct Answer)*
- **(D)** 3

> **Explanation:** Absolute value terms |x - a| have corner points where derivative is undefined. Here corner points are x = 1 and x = 2.

---

### Q24. What is the derivative of sec(x) with respect to x?
- **(A)** sec(x) tan(x)  ✓ *(Correct Answer)*
- **(B)** -sec(x) tan(x)
- **(C)** tan^2(x)
- **(D)** sec^2(x)

> **Explanation:** Standard calculus derivative: d/dx(sec x) = sec x tan x.

---

### Q25. What is the value of ∫ (1 / (1 + x^2)) dx from 0 to 1?
- **(A)** π/2
- **(B)** π/4  ✓ *(Correct Answer)*
- **(C)** π/3
- **(D)** 1

> **Explanation:** ∫ (1/(1+x^2)) dx = tan^-1(x). Evaluated from 0 to 1 gives tan^-1(1) - tan^-1(0) = π/4 - 0 = π/4.

---

### Q26. What is the area bounded by the curve y = x^2 and the line y = 4?
- **(A)** 16/3
- **(B)** 32/3  ✓ *(Correct Answer)*
- **(C)** 8/3
- **(D)** 64/3

> **Explanation:** Intersection points at x = -2 and x = 2. Area = ∫_{-2}^{2} (4 - x^2) dx = 2 * [4x - x^3/3]_{0}^{2} = 2 * (8 - 8/3) = 32/3.

---

### Q27. What is the order and degree of the differential equation (d^2y/dx^2)^3 + (dy/dx)^4 + y = 0?
- **(A)** Order 2, Degree 3  ✓ *(Correct Answer)*
- **(B)** Order 3, Degree 2
- **(C)** Order 2, Degree 4
- **(D)** Order 4, Degree 2

> **Explanation:** Highest derivative is d^2y/dx^2 (Order = 2). Power raised to highest derivative is 3 (Degree = 3).

---

### Q28. What is the integrating factor of the linear differential equation dy/dx + P(x)y = Q(x)?
- **(A)** e^(∫ P dx)  ✓ *(Correct Answer)*
- **(B)** ∫ P dx
- **(C)** e^(∫ Q dx)
- **(D)** P(x)

> **Explanation:** Standard integrating factor for 1st order linear ODE is I.F. = e^(∫ P(x) dx).

---

### Q29. If f(x) = x^3 - 3x^2 + 3x - 100, then f(x) is:
- **(A)** Strictly increasing on R  ✓ *(Correct Answer)*
- **(B)** Strictly decreasing on R
- **(C)** Increasing for x > 1 and decreasing for x < 1
- **(D)** Neither increasing nor decreasing

> **Explanation:** f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2 >= 0 for all x ∈ R, with zero only at isolated point x = 1. Thus f(x) is strictly increasing.

---

### Q30. What is the value of ∫_{-π}^{π} sin^3(x) cos^2(x) dx?
- **(A)** 0  ✓ *(Correct Answer)*
- **(B)** π
- **(C)** 2π
- **(D)** 1/2

> **Explanation:** f(x) = sin^3(x) cos^2(x) is an odd function because f(-x) = sin^3(-x) cos^2(-x) = -f(x). Integral of odd function over symmetric interval [-a, a] is 0.

---

### Q31. What is the distance between the parallel lines 3x + 4y - 5 = 0 and 6x + 8y + 15 = 0?
- **(A)** 5/2  ✓ *(Correct Answer)*
- **(B)** 2
- **(C)** 3
- **(D)** 7/2

> **Explanation:** Rewrite first line: 6x + 8y - 10 = 0. Distance d = |c1 - c2| / sqrt(a^2 + b^2) = |-10 - 15| / sqrt(6^2 + 8^2) = 25 / 10 = 5/2.

---

### Q32. What is the equation of the circle centered at (2, -3) and passing through (5, 1)?
- **(A)** (x - 2)^2 + (y + 3)^2 = 25  ✓ *(Correct Answer)*
- **(B)** (x + 2)^2 + (y - 3)^2 = 25
- **(C)** (x - 2)^2 + (y - 3)^2 = 25
- **(D)** (x - 5)^2 + (y - 1)^2 = 25

> **Explanation:** Radius r = sqrt((5-2)^2 + (1 - (-3))^2) = sqrt(3^2 + 4^2) = 5. Circle equation: (x - 2)^2 + (y + 3)^2 = 5^2 = 25.

---

### Q33. What is the eccentricity of the hyperbola x^2/9 - y^2/16 = 1?
- **(A)** 5/3  ✓ *(Correct Answer)*
- **(B)** 5/4
- **(C)** 4/3
- **(D)** 3/5

> **Explanation:** b^2 = a^2(e^2 - 1) => 16 = 9(e^2 - 1) => e^2 = 25/9 => e = 5/3.

---

### Q34. What is the angle between the vectors a = i + j - k and b = i - j + k?
- **(A)** cos^-1(-1/3)  ✓ *(Correct Answer)*
- **(B)** cos^-1(1/3)
- **(C)** π/3
- **(D)** 2π/3

> **Explanation:** a . b = (1)(1) + (1)(-1) + (-1)(1) = -1. |a| = √3, |b| = √3. cos θ = (a.b)/(|a||b|) = -1/3 => θ = cos^-1(-1/3).

---

### Q35. If a and b are unit vectors such that |a + b| = 1, then what is |a - b| equal to?
- **(A)** √2
- **(B)** √3  ✓ *(Correct Answer)*
- **(C)** 2
- **(D)** 1

> **Explanation:** |a+b|^2 + |a-b|^2 = 2(|a|^2 + |b|^2). 1^2 + |a-b|^2 = 2(1 + 1) = 4 => |a-b|^2 = 3 => |a-b| = √3.

---

### Q36. What is the projection of vector a = 2i + 3j + 2k on vector b = i + 2j + k?
- **(A)** 10 / √6  ✓ *(Correct Answer)*
- **(B)** 5 / √6
- **(C)** 10
- **(D)** √6

> **Explanation:** Projection = (a . b) / |b| = (2*1 + 3*2 + 2*1) / sqrt(1^2 + 2^2 + 1^2) = 10 / √6.

---

### Q37. What is the perpendicular distance of point (1, 2, 3) from the plane x + 2y + 2z - 5 = 0?
- **(A)** 2  ✓ *(Correct Answer)*
- **(B)** 3
- **(C)** 6/3
- **(D)** 2

> **Explanation:** d = |1(1) + 2(2) + 2(3) - 5| / sqrt(1^2 + 2^2 + 2^2) = |1 + 4 + 6 - 5| / 3 = 6 / 3 = 2.

---

### Q38. The direction cosines of a line equally inclined to the coordinate axes are:
- **(A)** (±1/√3, ±1/√3, ±1/√3)  ✓ *(Correct Answer)*
- **(B)** (±1/3, ±1/3, ±1/3)
- **(C)** (±1/√2, ±1/√2, ±1/√2)
- **(D)** (1, 1, 1)

> **Explanation:** l^2 + m^2 + n^2 = 1. Since line is equally inclined, l = m = n => 3l^2 = 1 => l = ±1/√3.

---

### Q39. What is the magnitude of vector cross product |a × b| if |a| = 4, |b| = 5, and a . b = 12?
- **(A)** 16  ✓ *(Correct Answer)*
- **(B)** 8
- **(C)** 12
- **(D)** 20

> **Explanation:** Lagrange's identity: |a × b|^2 + (a . b)^2 = |a|^2 |b|^2 => |a × b|^2 + 144 = 16 * 25 = 400 => |a × b|^2 = 256 => |a × b| = 16.

---

### Q40. What is the scalar triple product [a b c] if a = i, b = j, c = k?
- **(A)** 1  ✓ *(Correct Answer)*
- **(B)** 0
- **(C)** -1
- **(D)** 3

> **Explanation:** [i j k] = i . (j × k) = i . i = 1.

---

### Q41. Two dice are thrown simultaneously. What is the probability that the sum of numbers obtained is 8?
- **(A)** 5/36  ✓ *(Correct Answer)*
- **(B)** 1/6
- **(C)** 7/36
- **(D)** 1/9

> **Explanation:** Favorable pairs for sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes. Total = 36. P = 5/36.

---

### Q42. If P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2, what is P(A|B)?
- **(A)** 0.4  ✓ *(Correct Answer)*
- **(B)** 0.5
- **(C)** 0.25
- **(D)** 0.8

> **Explanation:** P(A|B) = P(A ∩ B) / P(B) = 0.2 / 0.5 = 0.4.

---

### Q43. If events A and B are independent, which of the following is correct?
- **(A)** P(A ∩ B) = P(A) * P(B)  ✓ *(Correct Answer)*
- **(B)** P(A ∪ B) = P(A) + P(B)
- **(C)** P(A|B) = 0
- **(D)** P(A ∩ B) = 0

> **Explanation:** By definition, two events A and B are independent if and only if P(A ∩ B) = P(A) * P(B).

---

### Q44. A bag contains 5 red and 3 green balls. If 2 balls are drawn at random without replacement, what is the probability that both are red?
- **(A)** 5/14  ✓ *(Correct Answer)*
- **(B)** 25/64
- **(C)** 5/28
- **(D)** 15/56

> **Explanation:** P(both red) = (5C2) / (8C2) = 10 / 28 = 5/14.

---

### Q45. What is the mean of first n natural numbers?
- **(A)** (n + 1) / 2  ✓ *(Correct Answer)*
- **(B)** n / 2
- **(C)** (n - 1) / 2
- **(D)** n(n + 1) / 2

> **Explanation:** Sum = n(n+1)/2. Mean = Sum / n = (n + 1) / 2.

---

### Q46. What is the variance of first n natural numbers?
- **(A)** (n^2 - 1) / 12  ✓ *(Correct Answer)*
- **(B)** (n^2 + 1) / 12
- **(C)** n^2 / 12
- **(D)** (n + 1)^2 / 12

> **Explanation:** Standard statistical formula for variance of 1, 2, ..., n is (n^2 - 1) / 12.

---

### Q47. If the mean of a binomial distribution is 4 and variance is 3, what is the value of parameter n?
- **(A)** 16  ✓ *(Correct Answer)*
- **(B)** 12
- **(C)** 8
- **(D)** 4

> **Explanation:** Mean = np = 4, Variance = npq = 3. q = 3/4 => p = 1/4. n(1/4) = 4 => n = 16.

---

### Q48. If two regression lines are 3x + 2y - 26 = 0 and 6x + y - 31 = 0, what is the mean of x?
- **(A)** 4  ✓ *(Correct Answer)*
- **(B)** 7
- **(C)** 5
- **(D)** 6

> **Explanation:** Regression lines intersect at (mean_x, mean_y). Solving 3x + 2y = 26 and 6x + y = 31 gives x = 4, y = 7.

---

### Q49. If coefficient of correlation between x and y is 0.8, what is the correlation between 2x and -3y?
- **(A)** -0.8  ✓ *(Correct Answer)*
- **(B)** 0.8
- **(C)** -0.24
- **(D)** 0.24

> **Explanation:** Correlation coefficient is invariant under change of scale except when signs differ. Multiplying one variable by +2 and other by -3 changes sign: r' = -0.8.

---

### Q50. What is the probability of getting 53 Sundays in a leap year?
- **(A)** 2/7  ✓ *(Correct Answer)*
- **(B)** 1/7
- **(C)** 53/366
- **(D)** 2/366

> **Explanation:** Leap year has 366 days = 52 weeks + 2 extra days. Extra days can be (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun). 2 out of 7 contain Sunday.

---

### Q51. NDA II 2023 Maths Q51: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q52. NDA II 2023 Maths Q52: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q53. NDA II 2023 Maths Q53: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q54. NDA II 2023 Maths Q54: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q55. NDA II 2023 Maths Q55: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q56. NDA II 2023 Maths Q56: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q57. NDA II 2023 Maths Q57: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q58. NDA II 2023 Maths Q58: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q59. NDA II 2023 Maths Q59: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q60. NDA II 2023 Maths Q60: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q61. NDA II 2023 Maths Q61: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q62. NDA II 2023 Maths Q62: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q63. NDA II 2023 Maths Q63: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q64. NDA II 2023 Maths Q64: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q65. NDA II 2023 Maths Q65: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q66. NDA II 2023 Maths Q66: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q67. NDA II 2023 Maths Q67: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q68. NDA II 2023 Maths Q68: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q69. NDA II 2023 Maths Q69: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q70. NDA II 2023 Maths Q70: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q71. NDA II 2023 Maths Q71: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q72. NDA II 2023 Maths Q72: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q73. NDA II 2023 Maths Q73: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q74. NDA II 2023 Maths Q74: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q75. NDA II 2023 Maths Q75: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q76. NDA II 2023 Maths Q76: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q77. NDA II 2023 Maths Q77: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q78. NDA II 2023 Maths Q78: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q79. NDA II 2023 Maths Q79: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q80. NDA II 2023 Maths Q80: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q81. NDA II 2023 Maths Q81: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q82. NDA II 2023 Maths Q82: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q83. NDA II 2023 Maths Q83: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q84. NDA II 2023 Maths Q84: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q85. NDA II 2023 Maths Q85: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q86. NDA II 2023 Maths Q86: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q87. NDA II 2023 Maths Q87: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q88. NDA II 2023 Maths Q88: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q89. NDA II 2023 Maths Q89: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q90. NDA II 2023 Maths Q90: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q91. NDA II 2023 Maths Q91: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q92. NDA II 2023 Maths Q92: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q93. NDA II 2023 Maths Q93: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q94. NDA II 2023 Maths Q94: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q95. NDA II 2023 Maths Q95: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q96. NDA II 2023 Maths Q96: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q97. NDA II 2023 Maths Q97: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q98. NDA II 2023 Maths Q98: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q99. NDA II 2023 Maths Q99: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q100. NDA II 2023 Maths Q100: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q101. NDA II 2023 Maths Q101: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q102. NDA II 2023 Maths Q102: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q103. NDA II 2023 Maths Q103: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q104. NDA II 2023 Maths Q104: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q105. NDA II 2023 Maths Q105: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q106. NDA II 2023 Maths Q106: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q107. NDA II 2023 Maths Q107: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q108. NDA II 2023 Maths Q108: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q109. NDA II 2023 Maths Q109: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q110. NDA II 2023 Maths Q110: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q111. NDA II 2023 Maths Q111: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q112. NDA II 2023 Maths Q112: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q113. NDA II 2023 Maths Q113: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q114. NDA II 2023 Maths Q114: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

### Q115. NDA II 2023 Maths Q115: What is the general solution of the differential equation dy/dx = (y/x) + tan(y/x)?
- **(A)** sin(y/x) = cx  ✓ *(Correct Answer)*
- **(B)** cos(y/x) = cx
- **(C)** tan(y/x) = cx
- **(D)** y = cx sin(x)

> **Explanation:** Let y = vx. v + x dv/dx = v + tan v => cot v dv = dx/x => ln|sin(y/x)| = ln|x| + ln c => sin(y/x) = cx.

---

### Q116. NDA II 2023 Maths Q116: What is the value of ∫_0^(π/2) (√sin(x) / (√sin(x) + √cos(x))) dx?
- **(A)** π/4  ✓ *(Correct Answer)*
- **(B)** π/2
- **(C)** 0
- **(D)** 1

> **Explanation:** Using King's property ∫_a^b f(x) dx = ∫_a^b f(a+b-x) dx, 2I = ∫_0^(π/2) 1 dx = π/2 => I = π/4.

---

### Q117. NDA II 2023 Maths Q117: What is the acute angle between the straight lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0?
- **(A)** 30°  ✓ *(Correct Answer)*
- **(B)** 45°
- **(C)** 60°
- **(D)** 90°

> **Explanation:** m1 = √3 (60°), m2 = 1/√3 (30°). Angle θ = |60° - 30°| = 30°.

---

### Q118. NDA II 2023 Maths Q118: If a vector r makes equal acute angles with x, y, z axes and has magnitude 6, what is vector r?
- **(A)** 2√3 (i + j + k)  ✓ *(Correct Answer)*
- **(B)** 3√2 (i + j + k)
- **(C)** 2 (i + j + k)
- **(D)** 6 (i + j + k)

> **Explanation:** Unit vector along r is (i+j+k)/√3. r = 6 * (i+j+k)/√3 = 2√3 (i + j + k).

---

### Q119. NDA II 2023 Maths Q119: What is the value of C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)?
- **(A)** 2^n  ✓ *(Correct Answer)*
- **(B)** 2^(n-1)
- **(C)** 2^n - 1
- **(D)** n^2

> **Explanation:** Sum of all binomial coefficients for power n equals 2^n.

---

### Q120. NDA II 2023 Maths Q120: If A and B are symmetric matrices of same order, then (AB - BA) is always:
- **(A)** Skew-symmetric matrix  ✓ *(Correct Answer)*
- **(B)** Symmetric matrix
- **(C)** Identity matrix
- **(D)** Zero matrix

> **Explanation:** (AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Hence skew-symmetric.

---

