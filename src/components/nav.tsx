const Nav = () => {
  return (
    <nav className="flex items-center justify-between max-w-3xl px-5 mx-auto h-14">
      <div className="flex justify-center navbar">
        <div className="mx-2 text-sm nav-item">
          <Link href={"/"}>首页</Link>
        </div>
        <div className="mx-2 text-sm nav-item">
          <Link href={"/archive"}>归档</Link>
        </div>
        <div className="mx-2 text-sm nav-item">
          <Link href={"/diary"}>随笔</Link>
        </div>
        <div className="mx-2 text-sm nav-item">
          <Link href={"/about"}>关于</Link>
        </div>
      </div>
      <div className="nav-tools">
        {/* 深色模式 */}
        <div className="flex justify-center dark-wrapper">
          {dark ? (
            <div
              className="flex items-center justify-center w-12 h-12 text-center transition-all rounded-full sun active:bg-slate-400"
              onClick={changeThemeSys}
            >
              <svg
                className="cursor-pointer icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3072"
                width="200"
                height="200"
              >
                <path
                  d="M752.41931153 240.7063601c8.36993432 0 15.62255883 3.08990502 21.72821045 9.16589356 6.1353147 6.08093262 9.18566918 13.3928833 9.18566918 21.73315382 0 8.55285621-3.05035376 15.85986352-9.18566918 21.94079614l-43.67394996 43.66900658c-5.93261719 5.97216773-13.17041016 8.95825195-21.72326709 8.95825195-8.87420678 0-16.20098901-2.98608422-22.08911085-8.75061035-5.88317847-5.87329102-8.80004906-13.2890625-8.80004906-22.14843774 0-8.54791283 2.95642114-15.75604272 8.91375732-21.72821044l43.66900659-43.67394996c6.14025879-6.07598853 13.44726539-9.16589356 21.98034668-9.16589356z m37.66223167 240.39459181h61.79809547c8.52813721 0 15.82031227 2.98608422 21.83697534 9.06207276C879.78271508 496.24395728 882.78857422 503.45208717 882.78857422 512c0 8.55285621-3.00585914 15.85986352-9.07196021 21.83697533-6.01666236 6.07598853-13.30883813 9.06207276-21.83697534 9.06207276h-61.79809547c-8.52813721 0-15.80053734-2.98608422-21.86663841-9.06207276-6.01666236-5.97711182-9.05712867-13.2890625-9.05712867-21.83697533 0-8.55285621 3.04046631-15.76098609 9.05712867-21.83697533 6.06610107-6.07598853 13.33850122-9.06207276 21.86663841-9.06207276zM512 141.21142578c8.52813721 0 15.79064917 3.08990502 21.85180688 9.06207276 6.02160645 6.08093262 9.05712867 13.3928833 9.05712867 21.83697533v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697534-6.06610107 6.07598853-13.32861305 9.16589356-21.85675025 9.16589355-8.53802467 0-15.80053734-3.08990502-21.86663842-9.16589355-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697534V172.11047387c0-8.44409203 3.03552222-15.76098609 9.05218458-21.83697533C496.20440674 144.3013308 503.46691871 141.21142578 512.00494408 141.21142578zM271.81304907 240.7063601c8.36499023 0 15.61267066 3.08990502 21.743042 9.16589356l43.66900659 43.67394996c6.14025879 6.07598853 9.17083764 13.38793922 9.17083764 21.72821044 0 8.55285621-3.01080323 15.86480689-9.05712938 21.83697534-6.03149391 6.08093262-13.30389404 9.06207276-21.85180617 9.06207275-8.69622827 0-16.02795386-2.98608422-21.95068359-8.85443115l-43.68383814-43.67395068c-5.97216773-5.97216773-8.92858886-13.28411842-8.92858886-22.03967284 0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697462 6.01666236-5.97216773 13.30883813-9.06207276 21.85675096-9.06207276h-0.03955126z m436.93725586 436.91253615c8.36499023 0 15.60772729 2.98608422 21.72326709 9.16589355l43.67394995 43.67395067c6.1353147 6.17980933 9.18566918 13.38793922 9.18566919 21.93585205 0 8.34521461-3.05035376 15.65716529-9.18566919 21.73315382-6.1105957 6.17980933-13.35827613 9.16589356-21.72326636 9.16589356-8.52813721 0-15.84008789-2.98608422-21.98034668-9.16589356l-43.66900659-43.66900587c-5.95733618-5.87329102-8.91375732-13.1852417-8.91375732-21.73315453 0-8.55285621 3.01080323-15.86480689 9.05712866-21.94079614 6.03149391-6.07598853 13.32861305-9.16589356 21.85180689-9.16589355h-0.01977564zM512.00494408 388.40380836c-34.12243628 0-63.22192359 12.05310035-87.39239525 36.2532351-24.1358645 24.10125732-36.21368384 53.25018335-36.21368384 87.34295654 0 34.0927732 12.07782007 63.24169922 36.21368384 87.44677734C448.78796387 623.53814721 477.88250709 635.59619164 512 635.59619164c34.12243628 0 63.23181176-12.05310035 87.4072268-36.15435838C623.51837158 575.2466433 635.59619164 546.09771729 635.59619164 512c0-34.0927732-12.07782007-63.24169922-36.18896484-87.34295654C575.23181176 400.45690942 546.12243628 388.40380836 512 388.40380836zM172.12036133 481.10095191h61.79809547c8.53802467 0 15.80053734 2.98608422 21.86663841 9.06207276 6.01666236 6.08093262 9.05712867 13.2890625 9.05712867 21.83697533 0 8.55285621-3.04046631 15.85986352-9.05712867 21.83697533-6.06610107 6.07598853-13.32861305 9.06207276-21.86663841 9.06207276h-61.79809547c-8.52813721 0-15.81042481-2.98608422-21.83697534-9.06207276C144.21728492 527.85986352 141.21142578 520.54791283 141.21142578 512c0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697533 6.03149391-6.07598853 13.30883813-9.06207276 21.83697534-9.06207276zM512.00494408 759.19238258c8.52813721 0 15.79064917 2.98608422 21.85180617 9.06207274 6.02160645 6.08093262 9.05712867 13.2890625 9.05712938 21.83697535v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697533C527.79559326 879.80249 520.53308129 882.78857422 512 882.78857422c-8.53802467 0-15.80053734-2.98608422-21.86663842-9.06207276-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697533v-61.79809546c0-8.55285621 3.03552222-15.76098609 9.05218458-21.83697534 6.06610107-6.07598853 13.32861305-9.06207276 21.86663842-9.06207275z m-196.47839379-81.57348633c8.5034182 0 15.80053734 2.98608422 21.84686279 9.16589355 6.03149391 6.08093262 9.07196021 13.3928833 9.07196021 21.94079614 0 8.44409203-3.08001685 15.65222192-9.19555664 21.72821044l-43.67394995 43.67394996c-6.10565162 6.17980933-13.34838867 9.16589356-21.72326637 9.16589356-8.54791283 0-15.84008789-2.98608422-21.85180687-8.96319533-6.07104516-6.07598853-9.0769043-13.38793922-9.0769043-21.93585205 0-8.65173364 2.95642114-15.96862769 8.92858887-21.94079614l43.68383813-43.66900658c6.10565162-6.17980933 13.44232202-9.16589356 21.95068359-9.16589355h0.03955054zM512 326.60571289c33.628052 0 64.6506958 8.34521461 93.0481565 24.81811547 28.42712378 16.69042992 50.92163109 39.1404419 67.4637456 67.56756568 16.57177758 28.32824708 24.86755347 59.32617188 24.86755347 93.00860596 0 33.68243408-8.27600098 64.68035888-24.86755347 93.10748267-16.58166504 28.32824708-39.08605981 50.77825904-67.4637456 67.4637456-28.36285424 16.58166504-59.37561059 24.82305884-93.0481565 24.82305884-33.66760254 0-64.67047143-8.24139381-93.05804468-24.81811547-28.37768578-16.69042992-50.86230492-39.14538598-67.46374487-67.46868897-16.58166504-28.42712378-24.86755347-59.42504859-24.86755348-93.10748267 0-33.68243408 8.31555152-64.68035888 24.86755348-93.00860596 16.55200195-28.42712378 39.03662109-50.87713647 67.46374487-67.56262231C447.35424828 334.94598413 478.371948 326.60571289 512 326.60571289z"
                  p-id="3073"
                  fill="#8a8a8a"
                ></path>
              </svg>
            </div>
          ) : (
            <div
              className="flex items-center justify-center w-12 h-12 text-center transition-all rounded-full moon active:bg-slate-400"
              onClick={changeThemeDark}
            >
              <svg
                className="cursor-pointer icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1587"
                width="30"
                height="30"
              >
                <path
                  d="M720.024199 351.521545c0 259.827641-221.37703 469.494584-494.203586 473.067991 78.511375 91.05714 197.258887 145.666943 326.238161 145.666942 231.677057 0 418.199246-174.779145 418.199246-388.489122 0-162.588837-109.02069-306.67623-270.391319-363.244579 13.309646 42.857343 20.157499 87.526106 20.157498 132.998768zM643.743261 219.995218c-9.553802-27.055963-9.007669-37.450152 0-49.873508 0 0 28.781462-16.84892 59.647412-7.071485C889.786921 222.09383 1024.000365 387.289747 1024.000365 581.767356 1024.000365 825.967816 812.66442 1024 552.058774 1024c-157.887853 0-297.577931-72.693407-383.223172-184.328239-6.153416-8.018979-9.259549-17.87292-8.788745-27.878694 1.121692-23.846253 21.852395-42.292377 46.303632-41.197757 4.425563 0.198915 8.55452 0.297784 12.385692 0.297784 247.139457 0 447.544497-187.78983 447.544497-419.371549 0-45.950529-7.93188-90.163789-22.53624-131.52515zM337.560199 498.624441l4.35612-26.753471-18.702713-19.486602c-4.374952-4.557389-4.269021-11.840736 0.235403-16.266299a11.31932 11.31932 0 0 1 6.2464-3.126143l25.329287-3.813517 20.8896-44.885333a0.75211 0.75211 0 0 0 0.051788-0.154189l0.015302-0.068266a0.045903 0.045903 0 0 1 0.01177-0.022364 0.009416 0.009416 0 0 1 0.015301 0.003532l20.934326 45.12662 25.361067 3.818225c6.209913 0.935724 10.495411 6.787825 9.571457 13.07189a11.555899 11.555899 0 0 1-3.080239 6.311136l-18.665048 19.49131 4.354943 26.753471c1.021646 6.268763-3.173223 12.187954-9.369012 13.220193a11.254584 11.254584 0 0 1-7.33749-1.277057l-21.754703-12.137343-21.75588 12.137343c-5.497821 3.068469-12.412763 1.045186-15.444745-4.518547a11.620634 11.620634 0 0 1-1.262934-7.424589zM32.549441 178.15246l8.990014-53.652892L3.423114 85.910069a11.767761 11.767761 0 0 1 0.251881-16.84068 12.192662 12.192662 0 0 1 6.654823-3.236782l52.159264-7.630566C74.850057 19.40068 86.55779 0 97.609928 0c11.054492 0 21.675844 19.40068 31.866409 58.202041l52.191044 7.636451c6.617159 0.96868 11.182786 7.026759 10.198805 13.532101a11.833674 11.833674 0 0 1-3.281508 6.534768l-38.03395 38.594207 8.990014 53.652892c1.086382 6.490041-3.382731 12.617563-9.983412 13.687466-2.683586 0.434317-5.436616-0.031779-7.81771-1.32296l-45.695117-24.773738-45.695117 24.773738c-5.857986 3.176754-13.226078 1.082851-16.455798-4.677444a11.737159 11.737159 0 0 1-1.345324-7.685885z"
                  fill="#8a8a8a"
                  p-id="1588"
                ></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// const  NavItem = () =>{

//     const item =
//     return (
//         <div className="mx-2 text-sm nav-item">
//           <Link href={"/"}>首页</Link>
//         </div>
//     )
// }

export default Nav;
