terraform {
  backend "s3" {
    bucket = "base-config-359066"
    key    = "workspaces"
    region = "us-east-1"
  }
}
