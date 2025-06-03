import React, { useState, useEffect } from 'react';
// Removed specific imports for Steam and Spotify as they are not directly available in lucide-react
import { Sun, Moon, Link, Github, Instagram, Twitch } from 'lucide-react';

// Main App component for the personal links website
const App = () => {
    // State to manage dark mode toggle
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize dark mode from localStorage or default to false
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    // Effect to save dark mode preference to localStorage
    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        // Apply or remove dark class from HTML body
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Updated placeholder data for personal links with actual URLs
    // Removed Twitch link
    const personalLinks = [
        {
            id: 3,
            title: 'سيرفر Discord',
            url: 'https://discord.com/invite/141', // Updated Discord invite link
            icon: Link, // Changed to generic Link icon as Discord icon is not directly available in Lucide
            description: 'انضم إلى مجتمعي وتواصل معي.'
        },
        {
            id: 2,
            title: 'حسابي على Instagram',
            url: 'https://www.instagram.com/rode.im/?hl=ar', // Updated Instagram profile link
            icon: Instagram,
            description: 'شاهد إبداعاتي المرئية وتصويري.'
        },
        {
            id: 7,
            title: 'قائمة تشغيلي على Spotify',
            url: 'https://open.spotify.com/playlist/4ooWF8hWvwH7crGLhsY1f2', // Updated Spotify profile/playlist link
            icon: Link, // Changed to generic Link icon as Spotify icon is not directly available in Lucide
            description: 'استمع إلى الموسيقى المفضلة لدي.'
        },
        {
            id: 6,
            title: 'ملفي الشخصي على Steam',
            url: 'https://steamcommunity.com/id/RODEEEEEE/', // Updated Steam profile link
            icon: Link, // Changed to generic Link icon as Steam icon is not directly available in Lucide
            description: 'اكتشف ألعابي وانضم إلي.'
        },
        {
            id: 1,
            title: 'حسابي على TikTok',
            url: 'https://www.tiktok.com/@_.3bq', // Updated TikTok profile link
            icon: Link, // Changed to generic Link icon as Tiktok icon is not directly available in Lucide
            description: 'شاهد مقاطع الفيديو القصيرة والممتعة.'
        },
    ].sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically by title

    return (
        // Main container with dynamic background and text colors based on dark mode
        <div className={`min-h-screen flex flex-col items-center p-4 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`} style={{ direction: 'rtl' }}>
            {/* Dark Mode Toggle Button */}
            <button
                onClick={toggleDarkMode}
                className={`fixed top-4 left-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50
                           ${isDarkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                aria-label="تبديل الوضع الليلي"
            >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Profile Section */}
            <header className="flex flex-col items-center mt-12 mb-8 w-full max-w-2xl">
                {/* Profile Picture */}
                <img
                    src="/download/uploaded:1b203ec2141f09dbbfbf44bef20c7051.jpg-66155f3e-4747-4523-8d36-98c12a23a36d" // Updated avatar image source
                    alt="صورة الملف الشخصي"
                    className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-xl mb-4 object-cover"
                />
                {/* Name */}
                <h1 className="text-4xl font-extrabold text-red-600 dark:text-orange-400 mb-2">RODE</h1>
                {/* Bio/Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-xl">
                    هلو
                </p>
            </header>

            {/* Links Section */}
            <main className="w-full max-w-3xl space-y-6 mb-12">
                {personalLinks.map(link => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-5 rounded-xl shadow-md transition-all duration-300
                                   ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-orange-100 hover:bg-orange-200'}
                                   border-r-4 border-red-500 dark:border-orange-500`}
                    >
                        {/* Link Icon */}
                        {link.icon && <link.icon size={32} className="text-red-600 dark:text-orange-400 ml-4 flex-shrink-0" />}
                        <div className="flex-grow">
                            {/* Link Title */}
                            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-orange-300' : 'text-red-700'}`}>
                                {link.title}
                            </h2>
                            {/* Link Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                {link.description}
                            </p>
                        </div>
                        {/* External Link Icon (generic link icon) */}
                        <Link size={20} className="text-gray-500 dark:text-gray-400 mr-4 flex-shrink-0" />
                    </a>
                ))}
            </main>

            {/* Footer */}
            <footer className={`w-full p-6 text-center rounded-t-xl
                                ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700'}`}>
                <p>© 2025 RODE. جميع الحقوق محفوظة.</p>
            </footer>
        </div>
    );
};

export default App;
