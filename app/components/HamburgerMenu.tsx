"use client";

import classNames from 'classnames';
import { useState, useEffect, useCallback, useSyncExternalStore, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useTranslation } from '../i18n/TranslationContext';



// Hydration-safe mounted check without useEffect + setState
const subscribe = () => () => { };
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function HamburgerMenu() {
    const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const [opened, setOpened] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { dict } = useTranslation();

    const primaryLinks = useMemo(() => [
        {
            label: dict.nav.group,
            href: '/group',
            subItems: [
                { label: dict.nav.history, href: '/group/history' },
                { label: dict.nav.mission, href: '/group/mission' },
                { label: dict.nav.governance, href: '/group/governance' },
                { label: dict.nav.keyFigures, href: '/group/key-figures' },
            ],
        },
        {
            label: dict.nav.houses,
            href: '/houses',
            subItems: [
                { label: dict.nav.allHouses, href: '/houses' },
                { label: 'AURELIC SYSTEMS', href: '/houses/aurelic' },
                { label: 'LOKOVOX MEDIA', href: '/houses/lokovox' },
                { label: 'MAVENTINE', href: '/houses/maventine', locked: true },
                { label: 'VELVESSENCE STUDIOS', href: '/houses/velvessence', locked: true },
                { label: 'KURENTENGU', href: '/houses/kurentengu', locked: true },
            ],
        },
        {
            label: dict.nav.commitments,
            href: '/commitments',
            subItems: [
                { label: dict.nav.sustainability, href: '/commitments/sustainability' },
                { label: dict.nav.socialResponsibility, href: '/commitments/social' },
                { label: dict.nav.environment, href: '/commitments/environment' },
            ],
        },
        {
            label: dict.nav.careers,
            href: '/careers',
            subItems: [
                { label: dict.nav.joinUs, href: '/careers' },
                { label: dict.nav.openPositions, href: '/careers#positions' },
            ],
        },
    ], [dict]);

    const secondaryLinks = useMemo(() => [
        { label: dict.nav.investors, href: '/investors' },
        { label: dict.nav.press, href: '/press' },
        { label: dict.nav.partners, href: '/partners' },
        { label: dict.nav.contact, href: '/contact' },
    ], [dict]);

    // Lock body scroll
    useEffect(() => {
        if (opened || searchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [opened, searchOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (searchOpen) { setSearchOpen(false); setSearchQuery(''); }
                else if (opened) { setOpened(false); setActiveSection(null); }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [opened, searchOpen]);

    const handleClose = useCallback(() => {
        setOpened(false);
        setActiveSection(null);
    }, []);

    const handlePrimaryClick = useCallback((link: typeof primaryLinks[0]) => {
        if (link.subItems && link.subItems.length > 0) {
            setActiveSection(prev => prev === link.label ? null : link.label);
        } else {
            handleClose();
        }
    }, [handleClose]);

    const handleSearchOpen = useCallback(() => {
        setOpened(false);
        setActiveSection(null);
        setSearchOpen(true);
    }, []);

    const handleSearchClose = useCallback(() => {
        setSearchOpen(false);
        setSearchQuery('');
    }, []);

    const activeLink = primaryLinks.find(l => l.label === activeSection);

    // Hamburger + Search buttons rendered as part of the portal when menu/search is open,
    // so they stay above the overlay. Otherwise rendered inline in the Navbar.
    const controlButtons = (
        <div className="flex items-center gap-4">
            <div
                className={classNames('tham tham-e-squeeze tham-w-6 cursor-pointer', { 'tham-active': opened })}
                onClick={() => { if (opened) handleClose(); else setOpened(true); }}
            >
                <div className="tham-box"><div className="tham-inner" /></div>
            </div>
            <button className="text-foreground hover:opacity-60 transition-opacity cursor-pointer" onClick={handleSearchOpen} aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </button>
        </div>
    );

    const overlays = mounted ? createPortal(
        <>
            {/* Fixed control buttons at same position as navbar, above the overlay */}
            {(opened || searchOpen) && (
                <div className="fixed top-0 left-0 z-[150] px-6 md:px-12 h-20 flex items-center">
                    {controlButtons}
                </div>
            )}

            {/* ===== MENU OVERLAY ===== */}
            <div
                className={classNames(
                    'fixed inset-0 z-[100] transition-all duration-300',
                    opened ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                )}
            >
                <div
                    className={classNames(
                        'fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-400',
                        opened ? 'opacity-100' : 'opacity-0'
                    )}
                    onClick={handleClose}
                />

                <div
                    className={classNames(
                        'fixed top-0 left-0 bottom-0 z-[101]',
                        'bg-background shadow-[4px_0_40px_rgba(0,0,0,0.15)]',
                        'overflow-hidden',
                        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                        'flex',
                        opened ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    )}
                    style={{ width: activeSection ? 'min(780px, 92vw)' : 'min(340px, 88vw)' }}
                >
                    {/* Left Column */}
                    <div className="flex flex-col h-full overflow-y-auto shrink-0" style={{ width: 'min(340px, 88vw)' }}>
                        <div className="h-20 shrink-0" />
                        <nav className="px-8 pt-4 pb-6">
                            <ul className="space-y-1">
                                {primaryLinks.map((link, i) => (
                                    <li key={link.href}>
                                        <button
                                            onClick={() => handlePrimaryClick(link)}
                                            className={classNames(
                                                'block w-full text-left py-2.5 text-[14px] font-bold tracking-[0.1em] uppercase cursor-pointer',
                                                'transition-all duration-300',
                                                activeSection === link.label ? 'text-foreground' : 'text-foreground hover:opacity-60',
                                                activeSection && activeSection !== link.label ? 'opacity-35' : 'opacity-100',
                                                opened ? 'translate-y-0' : 'translate-y-3'
                                            )}
                                            style={{ transitionDelay: opened ? `${100 + i * 60}ms` : '0ms' }}
                                        >
                                            <span className="flex items-center gap-3">
                                                {link.label}
                                                {link.subItems.length > 0 && (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                        className={classNames('transition-transform duration-300 opacity-30', activeSection === link.label ? 'rotate-90 opacity-100' : '')}
                                                    >
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                )}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mx-8 border-t border-foreground/8" />

                        <div className="px-8 py-5">
                            <Link href="/news/formula-k-partnership" onClick={handleClose}
                                className="flex items-center justify-between text-foreground text-[10px] tracking-[0.15em] uppercase hover:opacity-60 transition-opacity duration-300 group">
                                <span>KAISER KLOWNS × FORMULA K</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    className="transform group-hover:translate-x-1 transition-transform duration-300">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </div>

                        <div className="mx-8 border-t border-foreground/8" />

                        <nav className="px-8 pt-5 pb-6">
                            <ul className="space-y-3">
                                {secondaryLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} onClick={handleClose}
                                            className="block text-foreground/60 text-[11px] tracking-[0.08em] uppercase hover:text-foreground transition-colors duration-300">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="px-8 pt-2 pb-8 mt-auto">
                            <div className="flex items-center gap-5">
                                {[
                                    { label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                                    { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                                    { label: 'X', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                                ].map((social) => (
                                    <a key={social.label} href="#" className="text-foreground/40 hover:text-foreground/80 transition-colors duration-300" aria-label={social.label}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={social.d} /></svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Sub-content */}
                    <div
                        className={classNames(
                            'h-full overflow-y-auto border-l border-foreground/8 bg-foreground/[0.02]',
                            'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                            activeSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0 overflow-hidden'
                        )}
                        style={{ width: activeSection ? 'min(440px, 50vw)' : '0px' }}
                    >
                        {activeLink && activeLink.subItems.length > 0 && (
                            <div className="px-10 pt-24 pb-10">
                                <h2 className="text-[20px] font-bold tracking-[0.08em] uppercase text-foreground mb-2">{activeLink.label}</h2>
                                <div className="w-[30px] h-[2px] bg-red mb-8" />
                                <ul className="space-y-4">
                                    {activeLink.subItems.map((sub) => {
                                        const isLocked = 'locked' in sub && sub.locked;
                                        if (isLocked) {
                                            return (
                                                <li key={sub.href}>
                                                    <span className="group flex items-center gap-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground/25 cursor-default">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
                                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                                                        </svg>
                                                        {sub.label}
                                                        <span className="text-[8px] tracking-[0.15em] text-foreground/20 ml-1">{dict.nav.comingSoon}</span>
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={sub.href}>
                                                <Link href={sub.href} onClick={handleClose}
                                                    className="group flex items-center gap-3 text-[12px] font-semibold tracking-[0.1em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300">
                                                    <span className="w-0 group-hover:w-4 h-[1px] bg-red transition-all duration-300" />
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="mt-10 pt-6 border-t border-foreground/8">
                                    <Link href={activeLink.href} onClick={handleClose}
                                        className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-foreground font-semibold hover:opacity-60 transition-opacity duration-300">
                                        <span>{dict.nav.viewAll}</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ===== SEARCH POPUP ===== */}
            <div
                className={classNames(
                    'fixed inset-0 z-[200] transition-all duration-300',
                    searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                )}
            >
                <div
                    className={classNames('fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-400', searchOpen ? 'opacity-100' : 'opacity-0')}
                    onClick={handleSearchClose}
                />
                <div className="fixed top-0 left-0 right-0 flex justify-center pt-20 md:pt-24 px-4">
                    <div
                        className={classNames(
                            'relative z-[201] bg-background w-full max-w-[640px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]',
                            'transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]',
                            searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                        )}
                    >
                        <div className="px-6 md:px-8 py-6">
                            <div className="flex items-center gap-4 border-b-2 border-foreground/15 pb-4 focus-within:border-foreground/40 transition-colors duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/30 shrink-0">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input
                                    type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={dict.nav.search}
                                    className="flex-1 bg-transparent outline-none text-foreground text-[15px] placeholder:text-foreground/25 font-sans"
                                    autoFocus={searchOpen}
                                    onKeyDown={(e) => { if (e.key === 'Escape') handleSearchClose(); }}
                                />
                                <button onClick={handleSearchClose} className="text-foreground/40 hover:text-foreground transition-colors duration-200 cursor-pointer p-1" aria-label="Close search">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-5">
                                <p className="text-[10px] tracking-[0.15em] uppercase text-foreground/35 mb-3 font-semibold">{dict.nav.popularSearches}</p>
                                <div className="flex flex-wrap gap-2">
                                    {['GROUP', 'HOUSES', 'CAREERS', 'INVESTORS', 'PRESS'].map(tag => (
                                        <Link key={tag} href={`/${tag.toLowerCase()}`} onClick={handleSearchClose}
                                            className="px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase border border-foreground/12 text-foreground/50 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/[0.03] transition-all duration-200">
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    ) : null;

    return (
        <>
            {/* Inline buttons (visible when menu is NOT open) */}
            {!opened && !searchOpen && controlButtons}

            {/* When open, buttons are in the portal instead */}
            {overlays}
        </>
    );
}