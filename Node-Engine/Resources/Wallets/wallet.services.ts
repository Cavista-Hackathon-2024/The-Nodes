import { WalletModel } from "./wallet.model"

export class WalletService {
    public async CreateWallet (userId: string) {
        try {
            // Create a new wallet for the user
        } catch (error) {
            throw error
        }
    }

    public async FetchAllWalletsForUser (userId: string) {
        try {
            // Fetch all wallets for the user
        } catch (error) {
            throw error
        }
    }

    public async FetchWalletBalanceByUserId (userId: string) {
        try {
            const userWallet = await WalletModel.findOne({ user: userId })
            return userWallet?.balance 
        } catch (error) {
            throw error
        }
    }
}