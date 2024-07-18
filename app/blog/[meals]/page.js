export default function BlogMeals({ params }) {
  return (
    <main>
      <h1>Meal Deals</h1>
      <p>{params.meals}</p>
    </main>
  );
}
