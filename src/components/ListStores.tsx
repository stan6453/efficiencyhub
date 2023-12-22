import { memo } from "react";
import { IStore } from "../../global_types";

function ListStores({ stores }: { stores: IStore[] }) {
    return (
        <div className='flex flex-wrap justify-center'>
            {
                stores.map((store: IStore) => (
                        <div key={store.name + store.link}>
                            <div>{store.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: store.link }}></div>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default memo(ListStores);
