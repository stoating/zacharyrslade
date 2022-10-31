import { NavigationItems } from "../defines/navigation-items";

export const NavigationBar = () => {

  const NavigationBarItems = NavigationItems.filter(function (NavigationItems) {
    return NavigationItems.target !=="_blank";
  });

  return (
    <div className="flex items-center ring ring-black">
      {NavigationBarItems.map(item => (
        <div key={item.id} className="mx-auto block ring ring-blue-600">
          <a href={item.ref}>{item.text}</a>
        </div>
      ))}
    </div>
  );
}