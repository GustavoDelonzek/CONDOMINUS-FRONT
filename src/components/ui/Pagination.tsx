import React from 'react';
import { Link } from '@inertiajs/react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationMeta {
    from: number;
    to: number;
    total: number;
    links?: PaginationLink[];
}

interface PaginationProps {
    meta: PaginationMeta;
    links?: PaginationLink[];
}

export function Pagination({ meta, links }: PaginationProps) {
    if (!meta) return null;

    const paginationLinks = (meta?.links && meta.links.length > 0) 
        ? meta.links 
        : (links || []);

    if (paginationLinks.length === 0) return null;

    const formatLabel = (label: string): string => {
        if (label.includes('Previous')) return '‹';
        if (label.includes('Next')) return '›';
        return label;
    };

    const getButtonClasses = (link: PaginationLink): string => {
        const baseClass = 
            'w-9 h-9 flex items-center justify-center text-sm rounded-full border transition-colors';
        
        if (!link.url) {
            return `${baseClass} text-gray-300 border-gray-100 cursor-not-allowed`;
        }
        
        if (link.active) {
            return `${baseClass} bg-orange-600 text-white border-orange-600`;
        }
        
        return `${baseClass} bg-white text-gray-600 border-gray-200 hover:bg-gray-50`;
    };

    return (
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white border-t border-gray-100 rounded-b-xl">
            <div className="text-sm text-gray-500">
                Showing <span className="font-bold text-gray-900">{meta.from}</span> to{' '}
                <span className="font-bold text-gray-900">{meta.to}</span> of{' '}
                <span className="font-bold text-gray-900">{meta.total}</span> items
            </div>

            <nav className="flex items-center gap-1" aria-label="Pagination">
                {paginationLinks.map((link, index) => {
                    const formattedLabel = formatLabel(link.label);
                    const buttonClasses = getButtonClasses(link);

                    if (!link.url) {
                        return (
                            <span
                                key={`pagination-${index}`}
                                className={buttonClasses}
                                dangerouslySetInnerHTML={{ __html: formattedLabel }}
                                aria-disabled="true"
                            />
                        );
                    }

                    return (
                        <Link
                            key={`pagination-${index}`}
                            href={link.url}
                            className={buttonClasses}
                            dangerouslySetInnerHTML={{ __html: formattedLabel }}
                            aria-current={link.active ? 'page' : undefined}
                        />
                    );
                })}
            </nav>
        </div>
    );
}