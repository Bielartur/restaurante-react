import React from "react";
import { motion } from "framer-motion";

export function ListCard({ itens, renderItem, minSize = "15rem", keyPrefix = "", }) {

    return (
        <ul
            className={`grid gap-6 items-stretch mx-auto w-full max-w-6xl`}
            style={{
                gridTemplateColumns: `repeat(auto-fill, minmax(${minSize}, 1fr))`,
            }}
        >
            {itens.map((item, index) => (
                <motion.li key={`${keyPrefix}-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: index * 0.12, // escadinha
                    }}>
                    {renderItem(item)}
                </motion.li>
            ))}
        </ul>
    );
}
