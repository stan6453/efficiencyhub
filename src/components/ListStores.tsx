import { memo } from "react";

import { IStore } from "../../global_types";
import StoreLink from "./StoreLink";

function ListStores({ stores }: { stores: IStore[] }) {
    return (
        <div className='flex flex-wrap justify-evenly items-stretch'>
            {
                stores.map((store: IStore) => {
                    if (store.name === 'amazon') {
                        return (
                            <div key={store.name + store.link}>
                                <div dangerouslySetInnerHTML={{ __html: store.link }}></div>
                            </div>
                        )
                    }
                    else if (store.name === 'jumia') {
                        return (
                            <div key={store.link} >
                                <StoreLink store={store} />
                            </div>
                        )
                    }

                }
                )
            }
        </div>
    );
}

export default memo(ListStores);
