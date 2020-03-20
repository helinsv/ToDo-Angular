import { Pipe } from "@angular/core";
import { Item } from './model';

@Pipe({
  name: "search_filter",
  pure: true
})

export class SearchPipe {
  transform(items: Item[], name: string):  Item[] {

    if(!items)return null;
    if(!name)return items;
    name = name.toLowerCase();

    return items.filter(it => {
      return it.title.toLowerCase().includes(name);
    });
  }

}









