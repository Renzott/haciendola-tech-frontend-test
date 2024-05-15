

export class ImageIterator {
    private index: number = 0;
    
    ASSETS_IMAGES_ENPOINTS = [
        "assets/img/banana.png",
        "assets/img/basket_yellow.png",
        "assets/img/cereal1.png",
        "assets/img/credit_card_3.png",
        "assets/img/milk_pack.png",
        "assets/img/orange_juice.png",
        "assets/img/plain_yogurt.png",
        "assets/img/potato.png",
        "assets/img/soft_drink_blue.png",
        "assets/img/toilet_paper.png",
    ]

    constructor() { }

    next(): string {
        if (this.index === this.ASSETS_IMAGES_ENPOINTS.length - 1) {
            this.index = 0;
            return this.ASSETS_IMAGES_ENPOINTS[this.index];
        }

        this.index++;
        return this.ASSETS_IMAGES_ENPOINTS[this.index];
    }
}