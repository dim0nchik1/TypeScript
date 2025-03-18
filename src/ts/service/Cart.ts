import Buyable from '../domain/Buyable';


export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sum(): number{
        return this._items.reduce((sum, item) => sum + item.price,
            0,);
    }


    sumDiscount(sale: number): number{
        const amount = (this.sum() / 100) * sale;
        return this.sum() - amount;
    }

    delete(id: number): void {
        this._items = this._items.filter(function (n) {
            return n.id !== id
        })
    }
}