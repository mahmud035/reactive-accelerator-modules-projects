'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

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
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === 'en' ? 'English' : 'Bangla',
    });
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showMenu]);

  return (
    <div className="flex items-center gap-4">
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center gap-2"
          onClick={() => setShowMenu(!showMenu)}
          aria-expanded={showMenu}
          aria-haspopup="true"
          aria-label="Select language"
        >
          <Image
            className="max-w-8"
            src="/bd.png"
            alt=""
            height={100}
            width={165}
          />
          {selectedLanguage.language}
        </button>

        {showMenu && (
          <ul
            className="absolute right-0 z-10 w-40 p-2 mt-2 bg-white rounded-md shadow-lg top-full"
            role="menu"
          >
            {languages.map((entry) => (
              <li key={entry.code} role="none">
                <button
                  onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center w-full gap-2 p-2 text-left rounded-md cursor-pointer hover:bg-gray-100"
                  role="menuitem"
                >
                  <Image
                    className="max-w-8"
                    src="/bd.png"
                    alt=""
                    height={100}
                    width={165}
                  />
                  {entry.language}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
