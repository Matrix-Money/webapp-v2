import { ReactComponent as IconTimes } from 'assets/icons/times.svg';
import { ReactComponent as IconSearch } from 'assets/icons/search.svg';
import { withdrawWeth } from 'services/web3/swap/limit';
import { useWeb3React } from '@web3-react/core';

export const SwapLimitTable = () => {
  const { account } = useWeb3React();
  return (
    <div className="md:max-w-[1200px] mx-auto md:rounded-30 bg-white dark:bg-blue-4 md:shadow-widget my-40 pb-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:h-60 md:px-20">
        <div>
          <h2>Active Orders</h2>
        </div>
        <div
          className={'flex flex-col md:flex-row md:items-center md:space-x-10'}
        >
          <div className="relative">
            <IconSearch className="absolute w-12 ml-10 text-grey-3" />
            <input
              type="text"
              placeholder="Search"
              className="block w-full border border-grey-3 rounded-10 pl-30 h-28 focus:outline-none focus:border-primary"
            />
          </div>
          {account && (
            <div className={'flex'}>
              <button className={'btn-outline-secondary btn-sm rounded-10'}>
                Cancel All
              </button>
              <button
                className={'btn-outline-secondary btn-sm rounded-10'}
                onClick={() => withdrawWeth('1', account)}
              >
                Withdraw 1.00000 WETH
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={'overflow-x-scroll md:overflow-x-auto'}>
        <table className={'w-full'}>
          <thead>
            <tr>
              <th className={'min-w-[240px]'}>Expiration</th>
              <th className={'min-w-[200px]'}>You pay</th>
              <th className={'min-w-[200px]'}>You get</th>
              <th className={'min-w-[200px]'}>Rate</th>
              <th className={'min-w-[70px]'}>Filled</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="text-primary mr-12">15/02/2021</span>
                <span>12:10:07 PM</span>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>1123 BNT = 1.123456 BNT</td>
              <td>0.00%</td>
              <td className={'w-15'}>
                <button
                  className={
                    'hover:text-error py-5 pl-5 transition duration-200'
                  }
                >
                  <IconTimes className={'w-10'} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-primary mr-12">15/02/2021</span>
                <span>12:10:07 PM</span>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>1 BNT = 1 BNT</td>
              <td>0.00%</td>
              <td className={'w-15'}>
                <button
                  className={
                    'hover:text-error py-5 pl-5 transition duration-200'
                  }
                >
                  <IconTimes className={'w-10'} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-primary mr-12">15/02/2021</span>
                <span>12:10:07 PM</span>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>1 BNT = 1 BNT</td>
              <td>0.00%</td>
              <td className={'w-15'}>
                <button
                  className={
                    'hover:text-error py-5 pl-5 transition duration-200'
                  }
                >
                  <IconTimes className={'w-10'} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-primary mr-12">15/02/2021</span>
                <span>12:10:07 PM</span>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>1 BNT = 1 BNT</td>
              <td>0.00%</td>
              <td className={'w-15'}>
                <button
                  className={
                    'hover:text-error py-5 pl-5 transition duration-200'
                  }
                >
                  <IconTimes className={'w-10'} />
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="text-primary mr-12">15/02/2021</span>
                <span>12:10:07 PM</span>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>
                <div className={'flex items-center'}>
                  <div className="h-24 w-24 bg-grey-2 rounded-full mr-10"></div>
                  BNT 1.0000000
                </div>
              </td>
              <td>1 BNT = 1 BNT</td>
              <td>0.00%</td>
              <td className={'w-15'}>
                <button
                  className={
                    'hover:text-error py-5 pl-5 transition duration-200'
                  }
                >
                  <IconTimes className={'w-10'} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};