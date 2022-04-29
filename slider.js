const slidesOne = [
    {
        id: 1, title: 'Orange', imgClassName: 'rotate-image',
        url: 'https://images.unsplash.com/photo-1592187270271-9a4b84faa228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 2, title: 'Lemon',
        url: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        id: 3, title: 'Grapefruit', imgClassName: 'rotate-image',
        url: 'https://images.unsplash.com/photo-1609145180832-ae04ff5f2241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    },
    {
        id: 4, title: 'Lime',
        url: 'https://images.unsplash.com/photo-1596404643764-2a2461483a3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
];

const slidesTwo = [
    {
        id: 1, title: 'Winter', imgClassName: 'rotate-image',
        url: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        id: 2, title: 'Spring', imgClassName: 'rotate-image',
        url: 'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
    },
    {
        id: 3, title: 'Summer',
        url: 'https://images.unsplash.com/photo-1522851958811-4e18510b6dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        id: 4, title: 'Fall',
        url: 'https://images.unsplash.com/photo-1506193503569-d57d2a678510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    },
    {
        id: 5, title: 'And again . . .', titleClassName: 'last-title',
        url: 'https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
];

function Slider(SliderSettings){
    if (SliderSettings.items.length < 1) { return; }

    const {
        items, classNames = {},
        containerId = 'slider-container-one',
        initSlideId = items[0].id,
    } = SliderSettings;

    const CLASS_NAMES_TABLE = {
        slide: 'slide',
        slideTitle: 'slide-title',
        slideImage: 'slide-image',
        ...classNames,
    };

    function PrepareClassName(cond, className) {
        return cond ? (className ? className : cond) : '';
    }

    function SetClassNames(element, classList) {
        element.setAttribute('class', classList.join(' '));
    }

    const container = document.getElementById(containerId);
    const slides = [];

    items.forEach((item) => {
        const element = document.createElement('div');
        SetClassNames(element, [
            CLASS_NAMES_TABLE.slide,
            PrepareClassName((item.id === initSlideId), 'active'),
        ]);

        const textElement = document.createElement('h3');
        SetClassNames(textElement, [
            CLASS_NAMES_TABLE.slideTitle,
            PrepareClassName(item.titleClassName)
        ]);
        textElement.textContent = item.title;

        const imgBlock = document.createElement('img');
        SetClassNames(imgBlock, [
            CLASS_NAMES_TABLE.slideImage,
            PrepareClassName(item.imgClassName),
        ]);
        imgBlock.setAttribute('src', item.url);

        element.append(imgBlock, textElement);
        container.appendChild(element);
        slides.push(element);

        element.addEventListener('click', () => {
            if(![...element.classList].includes('active')){
                clearActiveClasses();
                element.classList.add('active');
            }
        });
    });

    function clearActiveClasses(){
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

Slider({
    items: slidesOne,
    initSlideId: slidesOne[3].id,
    classNames: {
        slideTitle: 'new-slide-title',
    },
});

Slider({
    items: slidesTwo,
    containerId: 'slider-container-two',
    initSlideId: slidesTwo[0].id,
});
