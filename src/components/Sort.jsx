import React from 'react';

const useSortableData = (pubs, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);


    const sortedItems = React.useMemo(() => {
        let sortableItems = [...pubs];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [pubs, sortConfig]);

    const sort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { pubs: sortedItems, sort, sortConfig };
};

export default useSortableData
