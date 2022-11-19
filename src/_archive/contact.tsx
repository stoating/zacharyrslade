// //import { useCallback, useState } from "react";
// import { MdEmail } from "react-icons/md";

// // interface FormData {
// //   name: string;
// //   email: string;
// //   message: string;
// // }

// export const Contact = () => {
//   //   const defaultForm = {
//   //     name: "",
//   //     email: "",
//   //     message: "",
//   //   };

//   //   // data is the state of the form
//   //   // every time the form is updated, the data state is updated
//   //   const [data, setData] = useState<FormData>(defaultForm);

//   //   // This calls back on every keystroke in any of the form fields
//   //   // T, or type, is the type of the event target
//   //   // In this case, it can be an HTMLInputElement or an HTMLTextAreaElement
//   //   // Because onChange is attached to the input and textarea elements
//   //   const onChange = useCallback(
//   //     <T extends HTMLInputElement | HTMLTextAreaElement>(
//   //       event: React.ChangeEvent<T>
//   //     ): void => {
//   //       // The target is the HTML element that triggered the event.
//   //       // Here we grab the name and value attributes from the target
//   //       // name is the name attribute of the input or textarea element
//   //       // value is the text input by the user
//   //       const { name, value } = event.target;

//   //       // fieldData is the key/value pair of the HTML name tag and user input
//   //       // partial makes the properties of FormData optional
//   //       // this means we can update a part of the form without updating the whole thing
//   //       const fieldData: Partial<FormData> = { [name]: value };

//   //       // setData is a function that updates the data state
//   //       // ...data is the current state of the form
//   //       // ...fieldData is the new data from the form
//   //       setData({ ...data, ...fieldData });
//   //     },
//   //     [data]
//   //   );

//   //   const handleSendMessage = useCallback(
//   //     async (event: React.FormEvent<HTMLFormElement>) => {
//   //       //onSubmit refreshes the page, so we prevent that
//   //       event.preventDefault();
//   //       /**
//   //        * This is a good starting point to wire up your form submission logic
//   //        * */

//   //       console.log("Data to send: ", data);
//   //     },
//   //     [data]
//   //   );

//   return (
//     <section id="contact" className="bg-slate-400">
//       <div className="mx-auto max-w-screen-lg py-10">
//         {/* Contact Me */}
//         <div className="flex flex-col text-4xl">
//           <div className="flex pb-2">
//             <i className="pt-1 pr-2">
//               <MdEmail />
//             </i>
//             Reach Out
//           </div>
//         </div>

//         {/* Make Two Columns */}
//         <div className="grid grid-cols-2 py-2">
//           {/* Contact Form */}
//           {/* Left Side */}
//           <div className="pr-2">
//             <form
//               className="grid grid-cols-1 gap-2"
//               method="POST"
//               action="https://formsubmit.co/zack.slade@gmail.com"
//             >
//               {/* Name Field */}
//               <input
//                 className="focus:border-1 rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 type="text"
//               />
//               {/* Email Field */}
//               <input
//                 autoComplete="email"
//                 className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-2 focus:ring-white"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 type="email"
//               />
//               {/* Message Field */}
//               <textarea
//                 className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-2 focus:ring-white"
//                 maxLength={250}
//                 name="message"
//                 placeholder="Message"
//                 required
//                 rows={6}
//               />
//               <input
//                 type="hidden"
//                 name="_next"
//                 value="https://www.zacharyrslade.com"
//               ></input>
//               {/* Submit Button */}
//               <button
//                 aria-label="Submit contact form"
//                 className="w-max rounded-md border-2 bg-slate-900 p-2 text-white hover:bg-slate-700"
//                 type="submit"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//           {/* Contact Info */}
//           {/* Right Side */}
//           <div className="pl-2">
//             {/* Email */}
//             {/* LinkedIn */}
//             {/* Xing */}
//             {/* GitHub */}
//             <div>Im on the right side</div>
//             <div>Im on the right side</div>
//             <div>Im on the right side</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
