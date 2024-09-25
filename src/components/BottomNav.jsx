import React from "react";
import "./component.css";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="bottom-nav grid grid-cols-5 lg:flex lg:flex-col lg:h-full fixed bottom-0 left-0 z-[102] w-full lg:w-fit px-6 lg:px-4 md:px-4 justify-around bg-white border border-[#ececec] rounded-2xl">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "nav-button col-span-1 "
            : isActive
            ? "nav-button col-span-1 link-active"
            : ""
        }
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <p>home</p>
      </NavLink>
      {/* <NavLink
        to="/wallet"
        className={({ isActive, isPending }) =>
          isPending ? "nav-button col-span-1 " : isActive ? "nav-button col-span-1 link-active" : ""
        }
      >
        <i className="fa-solid fa-wallet"></i>
        <p>wallet</p>
      </NavLink> */}

      <NavLink
        to="/mybooking"
        className={({ isActive, isPending }) =>
          isPending
            ? "nav-button col-span-1 "
            : isActive
            ? "nav-button col-span-1 link-active"
            : ""
        }
      >
        {/* <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 8C2.44772 8 2 8.44772 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 8.44772 21.5523 8 21 8H3Z"
            fill="#4296FF"
          />
          <path
            d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9C22 9.55228 21.5523 10 21 10H3C2.44772 10 2 9.55228 2 9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2Z"
            fill="#152C70"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z"
            fill="#152C70"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
            fill="#152C70"
          />
        </svg> */}

        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="#1C274C"
            stroke-width="1.5"
            fill="none"
          />
          <path
            d="M3 9H21"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M7 13H17M7 17H17"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <line
            x1="7"
            y1="2"
            x2="7"
            y2="5"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />

          <line
            x1="17"
            y1="2"
            x2="17"
            y2="5"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <p>bookings</p>
      </NavLink>
      <NavLink
        to="/sos"
        className={({ isActive, isPending }) =>
          isPending
            ? "nav-button col-span-1 "
            : isActive
            ? "nav-button col-span-1 link-active"
            : ""
        }
      >
        <svg
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M443.733,383.832h-25.348V256.168c0-79.99-65.327-145.402-145.317-145.402h-34.137
			c-79.99,0-144.813,65.412-144.813,145.402v127.665H68.267c-4.712,0-8.281,4.156-8.281,8.869v110.933
			c0,4.713,3.569,8.198,8.281,8.198h375.467c4.713,0,8.786-3.485,8.786-8.198V392.701
			C452.519,387.988,448.446,383.832,443.733,383.832z M238.931,127.832h34.137c70.579,0,128.25,57.756,128.25,128.335v127.665
			H111.186V256.168h0C111.185,185.589,168.352,127.832,238.931,127.832z M435.452,494.766h-358.4v-93.867H102.4h307.2h25.852
			V494.766z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256.252,0.168c-4.713,0-8.533,3.821-8.533,8.533v76.8c0,4.713,3.821,8.533,8.533,8.533s8.533-3.821,8.533-8.533v-76.8
			C264.786,3.988,260.965,0.168,256.252,0.168z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M104.402,126.637L65.767,88.001c-3.329-3.333-8.737-3.333-12.067,0c-3.333,3.331-3.333,8.735,0,12.067l38.635,38.635
			c1.664,1.667,3.85,2.5,6.033,2.5c2.183,0,4.369-0.833,6.033-2.5C107.735,135.372,107.735,129.968,104.402,126.637z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M454.271,88.001c-3.329-3.333-8.737-3.333-12.067,0l-38.637,38.636c-3.333,3.331-3.333,8.735,0,12.067
			c1.665,1.667,3.85,2.5,6.033,2.5c2.183,0,4.369-0.833,6.034-2.5l38.637-38.635C457.604,96.736,457.604,91.332,454.271,88.001z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M68.267,298.499H8.533c-4.712,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533h59.733c4.713,0,8.533-3.821,8.533-8.533
			S72.979,298.499,68.267,298.499z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M503.467,298.499h-59.733c-4.712,0-8.533,3.821-8.533,8.533s3.821,8.533,8.533,8.533h59.733
			c4.713,0,8.533-3.821,8.533-8.533S508.179,298.499,503.467,298.499z"
              />
            </g>
          </g>
        </svg>{" "}
        <p>sos</p>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending
            ? "nav-button col-span-1 "
            : isActive
            ? "nav-button col-span-1 link-active"
            : ""
        }
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
          <path
            d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
            stroke="#1C274C"
            stroke-width="1.5"
          />
          <path
            d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <p>cart</p>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? "nav-button col-span-1 "
            : isActive
            ? "nav-button col-span-1 link-active"
            : ""
        }
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>profile</p>
      </NavLink>
    </div>
  );
};

export default BottomNav;
