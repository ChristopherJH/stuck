export function Header(): JSX.Element {
  return (
    <div className="header">
      <h1>❓ Welcome to DeciderFlow!</h1>
      <div className="header-subheaders">
        <h2>Let’s help weigh up some options...</h2>
        <div className="header-questions">
          <h3>What shall I have for dinner? 🍕</h3>
          <h3>Where shall we go on holiday? 🏖</h3>
          <h3>Which job is best? 🧳</h3>
        </div>
      </div>
    </div>
  );
}
