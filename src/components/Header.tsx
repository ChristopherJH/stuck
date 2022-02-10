export function Header(): JSX.Element {
  return (
    <div className="header">
      <h1>Welcome to DeciderFlow!</h1>
      <div className="header-subheaders">
        <h2>Let’s help weigh up some options...</h2>
        <div className="header-questions">
          <h2>What shall I have for dinner?</h2>
          <h2>Where shall we go on holiday?</h2>
          <h2>Which job is best?</h2>
        </div>
      </div>
    </div>
  );
}
