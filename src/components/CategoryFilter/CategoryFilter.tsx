'use client'

import styles from './CategoryFilter.module.css'

interface CategoryFilterProps {
    categories: string[]
    active: string
    onChange: (cat: string) => void
}

const CATEGORY_LABELS: Record<string, string> = {
    todos: 'Todos',
    sillones: 'Sillones',
    mesas: 'Mesas',
    sillas: 'Sillas',
    otros: 'Otros',
}

export default function CategoryFilter({
    categories,
    active,
    onChange,
}: CategoryFilterProps) {
    return (
        <div className={styles.filter} role="group" aria-label="Filtrar por categoría">
            {['todos', ...categories].map((cat) => (
                <button
                    key={cat}
                    onClick={() => onChange(cat)}
                    className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
                    aria-pressed={active === cat}
                >
                    {CATEGORY_LABELS[cat] ?? cat}
                </button>
            ))}
        </div>
    )
}
