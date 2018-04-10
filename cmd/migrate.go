// Copyright © 2018 NAME HERE <EMAIL ADDRESS>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// migrateCmd represents the migrate command
var migrateCmd = &cobra.Command{
	Use:   "migrate",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		// TODO: Work your own magic here
		fmt.Println("migrate called")
	},
}

func init() {
	RootCmd.AddCommand(migrateCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// migrateCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// migrateCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")

}

//
//
//fmt.Printf("Applying `%s` SQL migrations...\n", "ladon")
//if num, err := ladon.NewSQLManager(db, nil).CreateSchemas("", "hydra_policy_migration"); err != nil {
//return errors.Wrap(err, "Could not apply `ladon` SQL migrations")
//} else {
//fmt.Printf("Applied %d `%s` SQL migrations.\n", num, "ladon")
//total += num
//}
//

//func (h *MigrateHandler) MigrateLadon050To060(cmd *cobra.Command, args []string) {
//	if len(args) != 2 {
//		fmt.Println(cmd.UsageString())
//		return
//	} else if args[0] != "0.6.0" {
//		fmt.Println(cmd.UsageString())
//		return
//	}
//
//	db, err := h.connectToSql(args[1])
//	if err != nil {
//		fmt.Printf("An error occurred while connecting to SQL: %s", err)
//		os.Exit(1)
//		return
//	}
//
//	if err := h.runMigrateLadon050To060(db); err != nil {
//		fmt.Printf("An error occurred while running the migrations: %s", err)
//		os.Exit(1)
//		return
//	}
//}

//func (h *MigrateHandler) runMigrateLadon050To060(db *sqlx.DB) error {
//	m := ladon.NewSQLManager(db, nil)
//	fmt.Printf("Applying `%s` SQL migrations.\n", "ladon")
//	if num, err := m.CreateSchemas("", "hydra_policy_migration"); err != nil {
//		return errors.Wrap(err, "Could not apply `ladon` SQL migrations")
//	} else {
//		fmt.Printf("Applied %d `%s` SQL migrations.\n", num, "ladon")
//	}
//
//	fmt.Println("Moving policies to new schema")
//	mm := ladon.SQLManagerMigrateFromMajor0Minor6ToMajor0Minor7{
//		DB:         db,
//		SQLManager: m,
//	}
//	if err := mm.Migrate(); err != nil {
//		return errors.Wrap(err, "Could not move policies to new schema")
//	}
//	fmt.Println("Migration successful!")
//	return nil
//}
