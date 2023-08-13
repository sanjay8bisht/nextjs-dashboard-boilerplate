import { useCallback, useState } from 'react';

const useOnScreen = ({ root = null, rootMargin = '0px', threshold = 1 } = {}) => {
    const [observer, setOserver] = useState<IntersectionObserver>();
    const [isIntersecting, setIntersecting] = useState(false);

    const measureRef = useCallback(
        (node) => {
            if (node) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIntersecting(entry.isIntersecting);
                        if (entry.isIntersecting) {
                            observer.unobserve(node);
                        }
                    },
                    { root, rootMargin, threshold }
                );

                observer.observe(node);
                setOserver(observer);
            }
        },
        [root, rootMargin, threshold]
    );

    return { measureRef, isIntersecting, observer };
};

export default useOnScreen;
