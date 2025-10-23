'use client';

import Image from 'next/image';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // console.log(pathname);

  const languages = [
    {
      code: 'en',
      language: 'English',
    },
    {
      code: 'bn',
      language: 'Bangla',
    },
  ];
  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    /* let path = pathname;
    if (pathname.includes(selectedLanguage.code)) {
      path = pathname.replace(selectedLanguage.code, lang);
    } */
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === 'en' ? 'English' : 'Bangla',
    });
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            className="max-w-8"
            src="/bd.png"
            alt="bangla"
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>
        {showMenu && (
          <div className="absolute right-0 z-10 w-40 p-2 mt-2 bg-white rounded-md shadow-lg top-full">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src="/bd.png"
                  alt="bangla"
                  height={100}
                  width={165}
                />
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
