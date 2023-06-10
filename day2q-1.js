function bubblesort(items) {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length - i - 1; j++) {
            if (items[j] > items[j + 1]) {
                let temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
            }

        }

    }
    return items;
}