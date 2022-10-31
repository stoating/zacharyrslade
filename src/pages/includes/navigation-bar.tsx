  const NavigationBarItems = [
    {id: 1, text: "Home", ref: "/"},
    {id: 2, text: "About", ref: "/about"},
    {id: 3, text: "Resume", ref: "/resume"},
    {id: 4, text: "Stoating", ref: "/stoating"},
    {id: 5, text: "Contact", ref: "/contact"},
  ]

export function NavigationBar() {
  return (
    <div className="flex items-center ring ring-black">
      {NavigationBarItems.map(item => (
        <div key={item.id} className="mx-auto block ring ring-blue-600">
          <a href={item.ref}>{item.text}</a>
        </div>
      ))}
    </div>
  );
};